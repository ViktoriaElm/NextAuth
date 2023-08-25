

export default function Modal({ add, setAdd, children }) {
    return (<>
        <div onClick={() => setAdd(false)} className={add ? "modal active" : "modal"}>
            <div onClick={e => e.stopPropagation()} className={add ? "content active" : "content"}>
                {children}
            </div>
        </div>
    </>);
}