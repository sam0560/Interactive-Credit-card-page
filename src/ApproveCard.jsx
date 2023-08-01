import IconComplete from './assets/images/icon-complete.svg'

const handleClick = (e) => {
    e.preventDefault();
    const refreshPage = location.reload();
    return refreshPage;
}
const ApproveCard = () => {
    return(
        <div className="ApproveCard">
            <img src={IconComplete} alt="Complete adding card icon with check mark" />
            <h2 className='thankYouH1'>Thank you</h2>
            <p>We've added you card details</p>
            <button onClick={handleClick}>Continue</button>
        </div>
    )
}

export default ApproveCard;