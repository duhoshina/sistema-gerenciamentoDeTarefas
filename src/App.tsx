import React from 'react';

// styles
import styles from './App.module.css';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interfaces
import { ITask } from './interfaces/Task'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.h2}>O que deve ser feito hoje?</h2>
        <TaskForm btnText='Criar Tarefa' />
        <h2 className={styles.h2}>Tarefas Pendentes</h2>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
