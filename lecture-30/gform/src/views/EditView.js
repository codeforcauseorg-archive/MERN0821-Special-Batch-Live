import { Button, Switch, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { FormContext } from "../App";
import "../css/edit.css";
import React, { useState } from "react";
import axios from "axios";

export default function EditView() {
  let [form, setForm] = useState();

  let params = useParams();

  useEffect(function () {
    axios
      .get("http://localhost:5000/forms/" + params.formid)
      .then(function (response) {
        setForm(response.data);
      });
  }, []);

  if (form === undefined) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <div id="topedit">
          <TextField
            id="formheadingedit"
            variant="standard"
            value={form.heading}
            onChange={(event) => {
              let copy = { ...form };
              copy.heading = event.target.value;
              setForm(copy);
            }}
          />

          <TextField
            id="formdescedit"
            variant="standard"
            value={form.description}
            onChange={(event) => {
              let copy = { ...form };
              copy.description = event.target.value;
              setForm(copy);
            }}
          />
        </div>

        {form.questions.map(function (question, index) {
          return (
            <div key={index} className="qdivedit">
              <TextField
                class="questionedit"
                variant="standard"
                value={question.title}
                onChange={(event) => {
                  question.title = event.target.value;
                  let copy = { ...form };
                  setForm(copy);
                }}
              />

              <select
                name="type"
                id="type"
                value={question.type}
                onChange={(event) => {
                  question.type = event.target.value;
                  let copy = { ...form };
                  setForm(copy);
                }}
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="long text">Long Text</option>
                <option value="date">Date</option>
              </select>

              <Switch
                checked={question.required}
                onChange={function (event) {
                  question.required = event.target.checked;
                  let copy = { ...form };
                  setForm(copy);
                }}
              />

              <Button
                variant="outlined"
                onClick={function () {
                  form.questions.splice(index, 1);
                  setForm({ ...form });
                }}
              >
                Remove Question
              </Button>
            </div>
          );
        })}

        <Button
          onClick={function () {
            let copy = { ...form };
            copy.questions.push({
              title: "Untitled Question",
              type: "text",
              required: true,
            });
            setForm(copy);
          }}
        >
          Add Question
        </Button>

        <Button
          variant="contained"
          onClick={function () {
            axios
              .put("http://localhost:5000/forms/" + form._id, form)
              .then(() => console.log("Saved"));
          }}
        >
          Save
        </Button>
      </div>
    );
  }
}
