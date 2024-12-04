import 'boxicons'
import { FaXTwitter } from "react-icons/fa6"

const Contact = () => {
  
  
  
  return (
    <div className='py-[3rem] bg-gradient-to-tr from-[#123] to-[#321]'>
    <div className='text-white text-xl font-normal tracking-wider px-4 flex flex-col gap-2'>
    <h2 className='text-[#0ef] text-3xl font-semibold text-center py-[1rem]'>Let's Collaborate With Me</h2>
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>Are you passionate about web development and looking for an opportunity to collaborate with a dedicated and skilled developer? Look no further!</p>
    <h3 className='text-yellow-500 text-center font-semibold text-2xl py-[0.5rem]'>What I'm Looking For:</h3>
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>I'm seeking like-minded individuals who are enthusiastic about creating stunning websites and web applications. Whether you're a designer, developer, or have skills in project management, I believe that collaboration is key to delivering exceptional results.</p>
    <h3 className='text-yellow-500 text-center font-semibold text-2xl py-[0.5rem]'>How We Can Work Together?</h3>
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>If you're interested in teaming up with me for web development projects, here's what you can expect:</p>
    <ul className='my-[1.5rem] list-disc max-w-4/5 mx-auto'>
    <li className='max-w-lg mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Collaborative Ideation:</span> We'll brainstorm ideas and come up with innovative solutions together.</li>
    <li className='max-w-lg mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Skill Sharing:</span> Share your expertise, and I'll do the same, fostering a learning environment for both of us.</li>
    <li className='max-w-lg mx-auto text-justify leading-relaxed'><span className='text-2xl font-semibold'>Timely Communication:</span> Clear and open communication is crucial for project success, and I'm committed to keeping the lines of communication open throughout our collaboration.</li>
    </ul>
    <h3 className='text-green-500 text-center font-semibold text-2xl py-[0.5rem]'>Get in Touch</h3>
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>If you're ready to embark on an exciting journey of web development collaboration, I'd love to hear from you! Feel free to reach out to me via the contact form below.</p>
    <p className='max-w-lg pt-4 text-right leading-relaxed'><em>Let's build something amazing together!</em></p>
    </div>
    <div>
    <h1 className='text-6xl text-white text-center font-semibold py-4'>Contact <span className='text-6xl font-semibold text-[#0ef] italic'>Me</span></h1>
    <hr className='h-[3px] w-[15rem] mx-auto mt-[-1rem] bg-white border-white'/>
    
    <div className='text-white flex flex-col gap-y-[1rem] max-w-lg mx-auto pl-4 sm:pl-0 pt-6 text-2xl font-light tracking-wider'>
    <a href='tel:+8801879449789' className='cursor-pointer flex items-center gap-2'> <box-icon name="phone" color='#0ef'> </box-icon>  01608-947513</a>
    <a href='mailto:dismailait@gmail.com' className='cursor-pointer flex items-center gap-2'><box-icon name='envelope' color='#0ef'> </box-icon> dismailait@gmail.com</a>
    <div className='my-[2rem] flex flex-row gap-x-5 items-center'>
    <a href='https://www.facebook.com/mdaismail.it' className='block' target='_blank'><box-icon name='facebook-circle' size='30px' color='#0ef' type='logo'> </box-icon></a>
    <a href='https://x.com/MdIsmail5851415' className='text-[#0ef]' target='_blank'><FaXTwitter size='27'/></a>
    <a href='https://github.com/mdaleardc' className='block' target='_blank'><box-icon name='github' size='30px' color='#0ef' type='logo'> </box-icon></a>
    <a href='https://bd.linkedin.com/in/mohammed-ismail-601457217' className='block' target='_blank'><box-icon name='linkedin' size='35px' color='#0ef' type='logo'> </box-icon></a>
    
    </div>
    </div>
    </div>
    </div>
    )
}

export default Contact;