"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiNote } from "./redux/slice";
import { useEffect } from "react";
import { BASE_URL } from "@/lib/baseUrl";

export default function Home() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.noteApiData);

  useEffect(() => {
    dispatch(fetchApiNote());
  }, []);

  const deleteNote = async (id) => {
    let result = await fetch(`${BASE_URL}/api/notes/` + id, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      dispatch(fetchApiNote());
    } else {
      alert("error");
    }
  };
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>
            <img src="./notes.png" />
            Notes
          </h1>
          <Link href="/notedetail">
            <button>
              <img src="./edit.png" />
              Create Notes
            </button>
          </Link>
        </div>
        <div className={styles.mainNoteContainer}>
          {notes?.result?.map((note) => (
            <div key={note._id}>
              <div className={styles.notesContainer1}>
                <div className={styles.noteContainerText}>
                  <h4>{note.title}</h4>
                  <hr />
                  <p>{note.description}</p>
                </div>
                <div className={styles.notesContainerImg}>
                  <div className={styles.date}>{note.newDate}</div>
                  <div>
                    <Link href={"notedetail/" + note._id}>
                      <img className={styles.editImg} src="./edit.png" />
                    </Link>
                    <img
                      className={styles.deleteImg}
                      onClick={() => deleteNote(note._id)}
                      src="./delete.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
