function jobmenu() {
    var elements = document.getElementsByClassName('btn btn-secondary active');
    while(elements.length > 0){
        elements[0].classList.remove('active');
    }

    document.getElementById("detail").innerHTML = `
    <div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Front-End Web Development Lead</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option1()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Front-End Developer</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option2()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">UX Writer</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10"onclick="option3()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">UX/UI Designer</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option4()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Blockchain Protocol Developer</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option5()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Marketing & Growth Specialist</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option6()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Content & Copy Manager</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Oct 27, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option7()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
<div class="detail-card">
    <div class="detail-left">
        <div class="title mt10">Rust Developer</div>
        <div class="sub mt10">Remote</div>
        <div class="date mt10">Posted on Dec 21, 2021</div>
    </div>
    <div class="detail-right">
        <a class="apply mt10" onclick="option8()">Apply Now</a>
    </div>
</div>
<hr / class="mt20">
    `
    }