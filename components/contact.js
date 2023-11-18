import React from 'react';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.queryRef = React.createRef();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  
    const email = this.emailRef.current.value;
    const query = this.queryRef.current.value;
  
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, query }),
    });
  
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.log('Error sending email');
    }
  }
  

  render() {
    return (
      <div className="w-full lg:h-[1006px] lg:px-16 px-8 lg:py-28 py-0 flex-col justify-center items-center lg:gap-20 inline-flex">
        <div className="lg:h-[149px] flex-col py-0 justify-start items-center lg:gap-4 flex">
          <div className="self-stretch lg:h-[109px] flex-col justify-start items-center lg:gap-6 flex">
            <div className="self-stretch text-center text-white lg:text-5xl text-2xl font-bold font-['Poppins'] lg:leading-[57.60px]">Contact us</div>
            <div className="self-stretch text-center text-white text-lg font-normal font-['Poppins'] lg:leading-[27px]">For more enquires you could reach out too us.</div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="lg:h-[553px] flex-col lg:px-36 w-full justify-start items-center lg:gap-6 flex">
          <label className="flex flex-col items-start self-stretch justify-start h-20 gap-2">
            <span className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">Name</span>
            <input type="text" name="name" onChange={this.handleInputChange} className="self-stretch w-full p-3 bg-white border border-white" />
          </label>
          <label className="flex flex-col items-start self-stretch justify-start h-20 gap-2">
            <span className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">Email</span>
            <input ref={this.emailRef} type="email" name="email" onChange={this.handleInputChange} className="self-stretch p-3 bg-white border border-white" />
          </label>
          <label className="self-stretch h-[212px] flex-col justify-start items-start gap-2 flex">
            <span className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">Message</span>
            <textarea ref={this.queryRef} name="message" onChange={this.handleInputChange} className="self-stretch h-[180px] p-3 bg-white border border-white justify-start items-start inline-flex"></textarea>
          </label>
         
          <button type="submit" className="px-6 py-3 bg-orange-600 rounded-[13px] border border-white justify-center items-center gap-2 inline-flex hover:bg-orange-500 transform transition duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-8 lg:mt-0 focus:ring-opacity-50 text-white ">
  Submit
</button>



        </form>
      </div>
    );
  }
}

export default ContactUs;
