import './Message.scss';

export function Message({ children, onOk, onCancel, okTxt}) {
    return (
        <div className="screen" onClick={onCancel}>
            <div className="message">
                <div className="body">{children}</div>
                <div className="flex space-between">
                    <button className="btn action-dark" type="button" onClick={onOk}>
                        {okTxt}
                    </button>
                    {onCancel && (
                        <button className="btn secondary" type="button" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
