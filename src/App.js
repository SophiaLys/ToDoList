import React, { useState } from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTasks, faTrash);

//Faire le formulaire en html

const App = () => {
  // on aura un liste de task sous forme de tableau, que l'on cree et met a jour
  const [tasks, setTasks] = useState([
    // { title: "Faire les courses", isDone: false },
    // { title: "Arroser les fleurs", isDone: false },
    // { title: "Prendre rdv garagiste", isDone: true },
  ]);

  const [taskInput, setTaskInput] = useState("");
  return (
    <>
      <div className="title">
        <FontAwesomeIcon className="icone " icon="tasks" />
        <h1>To Do List</h1>
      </div>
      <div className="container">
        {/* liste des tasks */}

        {tasks.map((task, index) => {
          return (
            <div className="liste">
              <input
                checked={task.isDone}
                type="checkbox"
                onClick={() => {
                  // console.log(index);
                  const newTasks = [...tasks];
                  // console.log(newTasks[index]);

                  if (newTasks[index].isDone === false) {
                    newTasks[index].isDone = true;
                  } else {
                    newTasks[index].isDone = false;
                  }
                  setTasks(newTasks);
                }}
              />
              <span className={task.isDone === true ? "checked" : ""}>
                {task.title}
              </span>
              <button
                onClick={() => {
                  const newTasks = [...tasks]; //on cree une copie de tasks
                  newTasks.splice(index, 1); //on retire 1 element a partir de index
                  setTasks(newTasks); // on met a jour
                }}
              >
                <FontAwesomeIcon className="trash" icon="trash" />
              </button>
            </div>
          );
        })}

        <form
          onSubmit={(event) => {
            //sinon la page se rafraichit et on perd etat qui sont rajouter
            event.preventDefault();
            // Ajouter une tache

            //Methode qui ne marche pas
            // tasks.push(taskInput);
            // setTasks(tasks);

            //Methode qui fonctionne
            const newTasks = [...tasks]; // copier le tableau
            newTasks.push({
              // pour rajouter
              title: taskInput,
              isDone: false,
            });
            setTasks(newTasks); //il faut appeler setTasks pour mettre a jour
            setTaskInput(""); // Il faut vider le input
          }}
        >
          <input
            type="text"
            value={taskInput}
            onChange={(event) => {
              const value = event.target.value;
              setTaskInput(value);
            }}
          />
          <button type="Submit">Add Task</button>
        </form>
      </div>
      <footer>
        <p>
          Made with <a href="https://fr.reactjs.org/">React</a> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> by Sylvie
        </p>
      </footer>
      ;
    </>
  );
};

export default App;
