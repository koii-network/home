function option6() {
  var elements = document.getElementsByClassName('btn btn-secondary active');
    while(elements.length > 0){
        elements[0].classList.remove('active');
    }
  var active = document.getElementById("mgs");
  active.classList.add("active");

    document.getElementById("detail").innerHTML = `
    <div class="bcak-icon"><img src="/img/jobs/icon/Job/Return-button.svg" onclick="jobmenu()"></div>
    <div class="job-content">
    <div class="job-title">Marketing & Growth Specialist</div>
    <div class="job-green">Who we are</div>
    <div class="job-detail">
      Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their digital content.
      <br /><br />We’ve got solutions to some of the biggest problems facing development of the next generation of Web 3.0 applications. We’re building an advanced, but accessible framework for creating applications that leverage blockchain consensus, decentralized file networks and attention rewards.
      <br /><br />Koii just closed a third successful funding round and we’re looking for talent to help us grow.
    </div>
    <div class="job-green">Job Type: <spam class="job-line">Full-time, Independent Contractor</spam></div>
    <div class="job-green">About the Role: <spam class="job-line">Marketing & Growth Specialist</spam></div>
    <div class="job-detail">
    Koii’s users can range from web developers to photographers, video game speedrunners to university students. In this role you will help segment and identify these potential users, pitch our value proposition, manage campaigns to target them and help us iterate and find product-market fit.
    <br/><br/>At Koii, we are committed to developing and growing talent. Promotions and career development at Koii can happen over the course of weeks and months, not years. We’re always looking to promote leaders from within.    
    </div>
    <div class="job-green">You have must (requirements): </div>
    <div class="job-detail">
      <ul>
      <li>Fluency and experience marketing crypto/blockchain-based technologies.</li>
      <li>Participated in marketing and growth projects through multiple channels with large spend.</li>
      <li>Comfort using CRM software, such as HubSpot, or analogous tools for Lead Generation, Email Marketing, and Customer Advocacy.</li>
      <li>Experience scaling technology-based, online start-ups or marketing blockchain-based services and products.</li>
      <li>Knowledge of how to effectively grow a healthy online community, balancing rapid expansion with intelligent moderation to create a safe space for all participants.</li>
      <li>Experience overseeing best practices in SEO.</li>
      <li>A willingness to help with the micro aspects of marketing campaigns, including quality assurance, graphics tweaks, content creation and educating team members.</li>
      </ul>
    </div>
    <div class="job-green">It would be great if you have: </div>
    <div class="job-detail">
      <ul>
      <li>Fluency with video editing and/or graphic design software such as Adobe Premiere Pro or Photoshop.</li>
      <li>Basic Web editing skills, including with tools such as Squarespace or WordPress.</li>
      <li>Experience with BuzzSumo, SEMRush, Google Analytics or other analytics tools.</li>
      <li>Quantitative and/or qualitative market research experience, including obtaining feedback from community members</li>
      <li>Experience marketing an “initial token offering” with an organization.</li>
      <li>Google Analytics, Google Console, Facebook Ads, and other digital marketing tools.</li>
      <li>Experience designing and administering moderation tools in a digital context.</li>
      <li>Experience managing subcontractors, consultants, ambassadors and other third-party agencies to achieve marketing and growth objectives.</li>
      </ul>
    </div>
    <a href="/form/career" target="_blank" style="text-decoration: none">
    <div class="job-green">To Apply: </div>
    <div class="job-detail">
    Please submit the following information:
    <ul>
      <li>Resume/CV</li>
      <li>Brief Cover Letter / Introductory Email</li>
      <li>Link to your portfolio/ GitHub for any past projects relevant to this role.
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