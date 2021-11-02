function option4() {
  var elements = document.getElementsByClassName('btn btn-secondary active');
    while(elements.length > 0){
        elements[0].classList.remove('active');
    }
  var active = document.getElementById("uxuid");
  active.classList.add("active");

    document.getElementById("detail").innerHTML = `
    <div class="bcak-icon"><img src="/img/jobs/icon/Job/Return-button.svg" onclick="jobmenu()"></div>
    <div class="job-content">
    <div class="job-title">UX/UI Designer</div>
    <div class="job-green">Who we are</div>
    <div class="job-detail">
      Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their digital content.
      <br /><br />We’ve got solutions to some of the biggest problems facing development of the next generation of Web 3.0 applications. We’re building an advanced, but accessible framework for creating applications that leverage blockchain consensus, decentralized file networks and attention rewards.
      <br /><br />Koii just closed a third successful funding round and we’re looking for talent to help us grow.
    </div>
    <div class="job-green">Job Type: <spam class="job-line">Full-time, Independent Contractor</spam></div>
    <div class="job-green">About the Role: </div>
    <div class="job-detail">
    <ul>
        <li>Use Figma as the primary design system.
        <li>Sketch, wireframe, and create high fidelity prototypes to design projects with the goal of crafting the products and interactions our users have with the Koii brand.</li>
        <li>Be an advocate for the user on every project ensuring we are solving the right problems in the right ways.</li>
        <li>Understand the project objectives, user needs, and overall product strategy.</li>
        <li>Lead user research efforts and user interviews</li>
        <li>Represent the design team brand and refine design concepts with key stakeholders.</li>
        <li>Observe, understand, document, then improve our users’ experience through both online and offline interactions</li>
        <li>Embody the user voice on all digital solutions concepts (from discovery through to design and implementation)</li>
        <li>Run user interviews, validate personas for concepts, and define user goals</li>
        <li>Create highly visual task flow, user journey and customer journey maps showing the end to end customer experience</li>
        <li>Work with the development team to develop achievable solutions and follow implementation</li>
        <li>Create and package deliverables and conduct QA at an expert level</li>
        <li>Review work with the Creator Director, and keep them updated on project status and escalate items appropriately</li>
        <li>Commit to improving processes and methods with an emphasis on both effectiveness and efficiency</li>
    <ul>
    </div>
    <div class="job-green">Requirements: </div>
    <div class="job-detail">
      <ul>
      <li>You have proven talent designing digital products for consumers or businesses (3+ years)</li>
      <li>You are able to use customer research and product data to inform your design decisions</li>
      <li>You're experienced with modern design and collaboration tools like Figma, Zeplin, Sketch, or Adobe Creative Suite (Photoshop, Illustrator, Adobe Xd)</li>
      <li>You prefer a collaborative approach to designing solutions</li>
      <li>You have a fundamental understanding of accessibility and the WCAG 2.0 guidelines</li>
      </ul>
    </div>
    <div class="job-green">What we are looking for: </div>
    <div class="job-detail">
      <ul>
      <li>Native English speaker with excellent written and verbal communication skills.</li>
      <li>Ability to engage and compel a target audience in a way that is clear and relatable</li>
      <li>Love of language and sensitivity to word choice and feeling conveyed across content.</li>
      <li>Strong UX writing skills with an appreciation for information architecture, metadata, taxonomy, search, and navigation.</li>
      <li>Detail-oriented and meticulous about punctuation and grammar.</li>
      <li>Demonstrated ability to make complex concepts and subjects clear and easy to understand</li>
      <li>Self-motivated and able to handle multiple projects simultaneously</li>
      <li>3 years + of professional writing experience (experience with blockchain/NFT projects are a bonus)</li>
      <li>Experience in creating and maintaining content standards and guidelines across an organization</li>
      <li>Excellent communicator with the ability to adapt voice and style to reflect our core message and principles</li>
      <li>Ability to create a narrative that guides users through tasks in a way that is simple and meaningful</li>
      <li>You’re a strategic thinker and an eager problem solver.</li>
      <li>Good visual design and user experience skills are a bonus.</li>
      </ul>
    </div>
    <div class="job-green">We’ll be excited if you also have: </div>
    <div class="job-detail">
        <ul>
        <li>Excellent writing skills</li>
        <li>Basic Web editing skills, including with tools such as Squarespace or Wordpress. Experience with front-end web development is an asset.</li>
        <li>Experience with cryptocurrency and other decentralized or blockchain-based technologies.</li>
        <li>Experience running user testing, analytics, focus groups, or other iterative processes to get feedback on design.</li>
        </ul>    
    </div>
    <div class="job-green">To Apply: </div>
    <div class="job-detail">
    Please submit the following information:
    <ul>
      <li>Resume/CV</li>
      <li>Brief Cover Letter / Introductory Email</li>
      <li>Link to your portfolio of any past projects relevant to this role.</li>
    </ul>
    </div>
    <div class="job-green">About Koii </div>
    <div class="job-detail">
      At Koii, we are building a protocol that creates infrastructure for quality information on the internet that is verified trustlessly. Anyone can use or build on top of our protocol and this network to track and reward attention. We value accessibility and transparency both in our products and in our organization.
      <br/><br/>Find out more at <a href="http://koii.network" target="_blank" class="job-link">Koii Network</a>
      <br/><br/>Koii is an equal opportunity employer committed to hiring a diverse workforce at all levels of the organization. We value and encourage the contributions of our employees and strive to create an environment where everyone can reach their full potential and drive outstanding results. All qualified applicants will receive consideration for employment without regard to race, national origin, age, sex, religion, disability, sexual orientation, marital status, veteran status, gender identity or expression, or any other basis protected by local, state, or federal law. This policy applies with regard to all aspects of one’s employment, including hiring, transfer, promotion, compensation, eligibility for benefits, and termination.
    </div>
    </div>
    <div class="job-apply d-flex align-items-center">
          <a href="https://share.hsforms.com/142u1Vp02TGuojOXCTUBGGQc20dg" target="_blank"><div class="btn btn-apply">Apply to this Vacant</div></a>
    </div>
    `
    }