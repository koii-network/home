function option9() {
    var elements = document.getElementsByClassName('btn btn-secondary active');
      while(elements.length > 0){
          elements[0].classList.remove('active');
      }
    var active = document.getElementById("jnd");
    active.classList.add("active");
  
      document.getElementById("detail").innerHTML = `
      <div class="bcak-icon"><img src="/img/jobs/icon/Job/Return-button.svg" onclick="jobmenu()"></div>
      <div class="job-content">
      <div class="job-title">Jr. Node Developer</div>
      <div class="job-green">Who we are</div>
      <div class="job-detail">
        Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their digital content.
        <br /><br />We’ve got solutions to some of the biggest problems facing development of the next generation of Web 3.0 applications. We’re building an advanced, but accessible framework for creating applications that leverage blockchain consensus, decentralized file networks and attention rewards.
        <br /><br />Koii just closed a third successful funding round and we’re looking for talent to help us grow.
      </div>
      <div class="job-green">Job Type: <spam class="job-line">Full-time, Independent Contractor</spam></div>
      <div class="job-green">About the Role: <spam class="job-line">Jr. Node Developer</spam></div>
      <div class="job-detail">
      You are an intellectually curious and highly motivated software developer who wants to empower others by building the best dApp framework. You are a team player and good collaborator with good time management skills. You know when to ask for help and your work gets finished without intense management from a supervisor. You have a high attention to detail and comment thoroughly on your code. When you finish a task, you help your teammates without being asked.
      <br><br>At Koii, we are committed to developing and growing talent. Promotions and career development at Koii can happen over the course of weeks and months, not years. We’re always looking to promote leaders from within.
      </div>
      <div class="job-green">You must have (requirements): </div>
      <div class="job-detail">
        <ul>
        <li>1-2 Years of Node.js Development
        <li>Demonstrated interest in microservices technology
        <li>Interest in web3 and blockchain
        <li>A desire to build systems without owners
        <li>A willingness to learn constantly and build new technology
        <li>A history of open-source development contributions
         </ul>
      </div>
      <div class="job-green">It would be great if you have: </div>
      <div class="job-detail">
        <ul>
        <li>Experience working with public key cryptography, Web3.0 technology or blockchain-based systems directly. 
        <li>Hands-on experience with smart contracts, decentralized file storage and the like 
        <li>Distributed Systems certifications or experience
        <li>Active in developer communities: hackathons, public forums, dev discords, stackoverflow
        <li>A live project you built from start-to-finish        
       </ul>
      </div>
      <a href="/form/career" target="_blank" style="text-decoration: none">
      <div class="job-green">To Apply: </div>
      <div class="job-detail">
      Please submit the following information:
      <ul>
        <li>Resume/CV</li>
        <li>Brief Cover Letter/Introductory Email</li>
        <li>Link to your portfolio/GitHub for any past projects relevant to this role.
</li>
      </ul>
      </div>
      <a>
      <div class="job-green">About Koii </div>
      <div class="job-detail">
        At Koii, we are building a protocol that creates infrastructure for quality information on the internet that is verified trustlessly. Anyone can use or build on top of our protocol and this network to track and reward attention. We value accessibility and transparency both in our products and in our organization.
        <br/><br/>Find out more at <a href="http://koii.network" target="_blank" class="job-link">Koii Network</a>
        <br/><br/>Koii is an equal opportunity employer committed to hiring a diverse workforce at all levels of the organization. We value and encourage the contributions of our employees and strive to create an environment where everyone can reach their full potential and drive outstanding results. All qualified applicants will receive consideration for employment without regard to race, national origin, age, sex, religion, disability, sexual orientation, marital status, veteran status, gender identity or expression, or any other basis protected by local, state, or federal law. This policy applies with regard to all aspects of one’s employment, including hiring, transfer, promotion, compensation, eligibility for benefits, and termination.
      </div>
      </div>
      <div class="job-apply d-flex align-items-center">
            <a href="/form/career/" target="_blank"><div class="btn btn-apply">Apply for this job</div></a>
      </div>
      `
      }