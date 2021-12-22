function option7() {
  var elements = document.getElementsByClassName('btn btn-secondary active');
    while(elements.length > 0){
        elements[0].classList.remove('active');
    }
  var active = document.getElementById("ccm");
  active.classList.add("active");

    document.getElementById("detail").innerHTML = `
    <div class="bcak-icon"><img src="/img/jobs/icon/Job/Return-button.svg" onclick="jobmenu()"></div>
    <div class="job-content">
    <div class="job-title">Content & Copy Manager</div>
    <div class="job-green">Who we are</div>
    <div class="job-detail">
      Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their digital content.
      <br /><br />We’ve got solutions to some of the biggest problems facing development of the next generation of Web 3.0 applications. We’re building an advanced, but accessible framework for creating applications that leverage blockchain consensus, decentralized file networks and attention rewards.
      <br /><br />Koii just closed a third successful funding round and we’re looking for talent to help us grow.
    </div>
    <div class="job-green">Job Type: <spam class="job-line">Full-time, Independent Contractor</spam></div>
    <div class="job-green">About the Role: <spam class="job-line">Content & Copy Manager</spam></div>
    <div class="job-detail">
    You will be responsible for website copy and content ranging from blogs, social posts, newsletters and more. You will start day-1 with a commitment to getting to know the value proposition and conversion points of multiple projects, and be willing to work from scratch developing and honing messaging that converts. You will be responsible for authoring content and before long, managing others working on website copy and marketing content.
    <br/><br />At Koii, we are committed to developing and growing talent. Promotions and career development at Koii can happen over the course of weeks and months, not years. We’re always looking to promote leaders from within.
    </div>
    <div class="job-green">You have (requirements): </div>
    <div class="job-detail">
      <ul>
      <li>A post-secondary degree in Journalism, English, Communications, Marketing or related field</li>
      <li>Proven experience working in advertising and website copywriting</li>
      <li>Develop compelling long and short copy for direct and digital assignments with strong attention to detail, editing, and polish</li>
      <li>Ability to consult with entrepreneurs and develop messaging from scratch</li>
      <li>Understand complex value propositions thoroughly and ensure excellent brand consistency</li>
      <li>Well versed in SEO (keyword research, best practices) and optimization experience</li>
      <li>Literacy with cryptocurrency, blockchain technology, decentralized finance and the key debates and players in that space</li>
      <li>Leverage data-driven decision making, particularly A/B testing content hypotheses to drive business outcomes (increase conversion, improve search CTR, etc.)</li>
      </ul>
    </div>
    <div class="job-green">It would be great if you have: </div>
    <div class="job-detail">
      <ul>
      <li>Experience working for a company working on cryptocurrency and other decentralized or blockchain-based technologies</li>
      <li>Experience using SAAS tools like BuzzSumo or SEMrush to create high-impact copy and content.</li>
      <li>Experience mentoring and developing talent</li>
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