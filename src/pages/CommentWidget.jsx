import { Button, Input } from "antd";
import React, { useState } from "react";

const CommentWidget = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (!inputValue.trim()) return;
    const newComment = {
      id: comments.length + 1,
      text: inputValue,
    };
    setComments([...comments, newComment]);
    setInputValue(""); // clear input
  };
  return (
    <div>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a comment..."
        style={{ width: "100%" }}
      />
      <Button
        type="primary"
        style={{ marginTop: "10px" }}
        onClick={handleAddComment}
      >
        Comment
      </Button>
      <Button type="default" style={{ marginTop: "10px", marginLeft: "10px" }}>
        Cancel
      </Button>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentWidget;
