function option11() {
    var elements = document.getElementsByClassName('btn btn-secondary active');
      while(elements.length > 0){
          elements[0].classList.remove('active');
      }
    var active = document.getElementById("cm");
    active.classList.add("active");
  
      document.getElementById("detail").innerHTML = `
      <div class="bcak-icon"><img src="/img/jobs/icon/Job/Return-button.svg" onclick="jobmenu()"></div>
      <div class="job-content">
      <div class="job-title">Community Manager</div>
      <div class="job-green">Who we are</div>
      <div class="job-detail">
        Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their digital content.
        <br /><br />We’ve got solutions to some of the biggest problems facing development of the next generation of Web 3.0 applications. We’re building an advanced, but accessible framework for creating applications that leverage blockchain consensus, decentralized file networks and attention rewards.
        <br /><br />Koii just closed a third successful funding round and we’re looking for talent to help us grow.
      </div>
      <div class="job-green">Job Type: <spam class="job-line">Full-time, Independent Contractor</spam></div>
      <div class="job-green">About the Role: 
      <spam class="job-line"><br/>
      Koii is looking for a personable, responsible, and organized candidate with a history of community enrichment and positivity.  The Koii Community Manager will be responsible for building and maintaining a brand's community  on mediums such as discord, telegram, twitter and offline. The job requires engaging audiences on a variety of outlets, providing support to our marketing team and developing community events and campaigns. 
      <br/><br/>
      At Koii, we are committed to developing and growing talent. Promotions and career development at Koii can happen over the course of weeks and months, not years. We’re always looking to promote leaders from within. 

      </spam></div>
      <div class="job-green">You have (requirements): </div>
      <div class="job-detail">
        <ul>
        <li>Experience managing brand identity through online presence via multiple social media channels</li>
        <li>Verifiable growth of an online community thanks to your management and engagement</li>
        <li>Knowledge of the risks associated with rapidly growing an online community, and the willingness to balance growth by prioritizing risk-mitigation, safety tools and equity considerations when it matters</li>
        <li>Comfort with social media platform management tools such as Hootsuite, IFTTT, or Ripl. </li>
        <li>Comfort with any graphic design software, able to assist with tailoring content pieces for the communities you manage.</li>
        <li>Fluency and experience marketing crypto/blockchain-based technologies.</li>
        <li>Participated in marketing and growth projects through multiple channels with large spend.</li>
        <li>Knowledge of how to effectively grow a healthy online community, balancing rapid expansion with intelligent moderation to create a safe space for all participants.</li>

        </ul>
      </div>
      <div class="job-green">We’ll be excited if you also have: </div>
      <div class="job-detail">
        <ul>
        <li>Experience using CRM software, such as HubSpot, Salesforce, or analogous tools for Lead Generation, Email Marketing, and Customer Advocacy.
        <li>Quantitative and/or qualitative research experience with obtaining feedback from community members
        <li>Experience designing and administering moderation tools in a digital context.
        <li>Experience managing subcontractors, consultants, ambassadors and other third-party agencies to achieve marketing and growth objectives.
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