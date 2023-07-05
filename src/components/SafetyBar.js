import "../styles/SafetyBar.css"

function SafetyBar() {
    const scrollToISI = () => {
        console.log('scroll to ISI clicked');
    }

    return (
        <div className="safety-bar container">
            <div className="safety-bar__content">
                <button onClick={scrollToISI} className='btn safety__btn-isi'>+</button>
                <h2 className="h1 mb5">IMPORTANT SAFETY INFORMATION</h2>
                <p className="mb5">3 visible lines of copy should always be visible</p>
                <p className="mb5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit, metus ac hendrerit vestibulum, turpis tortor tempus lacus, nec mollis magna lorem ac nisi. Vivamus quis enim lorem.</p>
            </div>
        </div>
    )
}
export default SafetyBar