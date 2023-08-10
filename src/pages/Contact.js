import '../styles/Contact.css';

const Contact = () => {
    return (
        <>
            <div className='container contact'>
                <form className='form'>
                    <div className='form__roup mb5'>
                        <label htmlFor='name' className='form__label'>
                            Name
                        </label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className='form__group mb5'>
                        <label htmlFor='email' className='form__label'>
                            Email
                        </label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div className='form__group mb5'>
                        <label htmlFor='message' className='form__label'>
                            Message
                        </label>
                        <textarea name='message' id='message'></textarea>
                    </div>
                    <div className='form__group mb5'>
                        <input type='submit' value='Submit' className='btn' />
                    </div>
                </form>
            </div>
        </>
    );
};
export default Contact;
