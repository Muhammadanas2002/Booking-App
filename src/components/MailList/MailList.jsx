import "./MailList.css"

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className="mailTitle">
                Save time, Save Money!
            </h1>
            <span className="mailDesc">
                Signup & We will send the best deals to you
            </span>
            <div className="mailInput">
                <input type="text" placeholder='your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList
