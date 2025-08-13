import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

function Quiz({ studentEmail }) {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    if (!studentEmail) return;

    console.log("Fetching quiz questions for:", studentEmail);

    axios
      .get("http://localhost:8080/quiz/start", { params: { email: studentEmail } })
      .then((response) => {
        console.log("Questions fetched:", response.data);
        setQuestions(response.data);
        setError("");
        setScore(null);
        setSubmitted(false);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err.response?.data || err.message);
        setError(err.response?.data || "Failed to fetch questions");
        setQuestions([]);
      });
  }, [studentEmail]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: questions.reduce((acc, q) => {
      acc[q.id] = "";
      return acc;
    }, {}),
    onSubmit: (values) => {
      setSubmitError("");
      setScore(null);

      console.log("Submitting answers:", values);

      const answers = questions.map((q) => ({
        question: { id: q.id },
        selectedAnswer: values[q.id], // can be "" if unanswered
      }));

      console.log("Payload to backend:", answers);

      axios
        .post(`http://localhost:8080/quiz/submit?email=${studentEmail}`, answers)
        .then(() => {
          setSubmitted(true); 
        })
        .catch((err) => {
          console.error("Error submitting quiz:", err.response?.data || err.message);
          setSubmitError(err.response?.data || "Failed to submit quiz");
        });
    },
  });

  const fetchScore = () => {
    setLoadingResults(true);
    axios
      .get(`http://localhost:8080/students/score`, { params: { email: studentEmail } })
      .then((res) => {
        setScore(res.data);
      })
      .catch((err) => {
        setSubmitError(err.response?.data || "Failed to fetch score");
      })
      .finally(() => {
        setLoadingResults(false);
      });
  };

  if (error) {
    return <div className="alert alert-danger mt-3">{error}</div>;
  }

  if (score !== null) {
    return (
      <div className="container mt-4">
        <h2>
          Your score: {score} / {questions.length}
        </h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Quiz Questions</h2>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {!submitted ? (
            <form onSubmit={formik.handleSubmit}>
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="card mb-3 shadow-sm"
                  style={{ padding: "20px", borderRadius: "8px" }}
                >
                  <h5>
                    Question {idx + 1}: {q.questionText}
                  </h5>
                  <div
                    role="group"
                    aria-labelledby={`question-${q.id}`}
                    style={{ marginTop: "12px" }}
                  >
                    {["A", "B", "C", "D"].map((opt) => (
                      <label
                        key={opt}
                        style={{ display: "block", marginBottom: "8px", cursor: "pointer" }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={opt}
                          onChange={formik.handleChange}
                          checked={formik.values[q.id] === opt}
                          style={{ marginRight: "8px" }}
                        />
                        {opt}. {q[`option${opt}`]}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {submitError && (
                <div className="alert alert-danger" role="alert">
                  {submitError}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                Submit Quiz
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p>Quiz submitted successfully!</p>
              <button
                className="btn btn-success"
                onClick={fetchScore}
                disabled={loadingResults}
              >
                {loadingResults ? "Loading..." : "Show Results"}
              </button>

              {submitError && (
                <div className="alert alert-danger mt-3" role="alert">
                  {submitError}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
