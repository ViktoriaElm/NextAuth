

export default function Modal({active, setActive, children}) {
    return(<>
        <div onClick={() => setActive(false)} className={active ? "modal active" : "modal"}>
        <div onClick={e => e.stopPropagation()} className={active ? "content active" : "content"}>
            {children}
        </div>
        </div>
        </>);
}