// import styles from "@/styles/modal.module.css"

export default function Modal({ active, setActive, children }) {
    return (<>
        <div onClick={() => setActive(false)} className={active ? "modal active" : "modal"}>
        {/* <button>X</button> */}
            <div onClick={e => e.stopPropagation()} className={active ? "content active" : "content"}>
                {children}
            </div>
        </div>
    </>);
}
