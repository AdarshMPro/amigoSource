function Fab({ show }) {

    return (
        
        <div className="bot-right">
 { show ? (
        <div>
            <img className="Fab-ic" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="Fab Icon" />
        </div>
        ) : null }
        </div>
    );

}

export default Fab;