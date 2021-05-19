let flexible = document.getElementById("flexible");
let homePage = document.getElementById("home");
let contactPage = document.getElementById("contact");
let aboutPage = document.getElementById("about");

homePage.addEventListener("click", function () {
    flexible.innerHTML = homeRender();
})
contactPage.addEventListener("click", function () {
    flexible.innerHTML = contactRender();
})

aboutPage.addEventListener("click", function () {
    flexible.innerHTML = aboutRender();
})

function homeRender() {
    return ` <main id="render-area">
    <header>
        <img src="https://i.ibb.co/F49STzv/4d1a5a73-309c-4ef1-bf12-e64de110ce5f.jpg" alt="Profile Image">

        <article>
            <p>Software Developer</p>
            <p>My Name is Umut Aslan.I am 26 years old. <br> I am from Turkey and
                I have been in Switzerland almost 2 years.</p>
        </article>
    </header>
    <div>
        <section>

            <nav>
                <a href="https://www.instagram.com/umutaslan.china/" target="_blank"><i class="fa fa-instagram"
                        aria-hidden="true"></i></a>
                <a href="https://github.com/UmutAslan-cloud" target="_blank"><i class="fa fa-github"
                        aria-hidden="true"></i></a>
                <a href="mailto:umutaslan.china@hotmail.com" target="_blank"><i class="fa fa-envelope-o"
                        aria-hidden="true"></i></a>
            </nav>
            <div class="tables">
                <table class="schools">
                    <tr class="table-header">
                        <th>Schools</th>
                        <th>Grad</th>
                        <th>Country</th>
                        <th>Website</th>
                    </tr>
                    <tr class="table-rows">
                        <td>Huseyin Burge High School</td>
                        <td>2013</td>
                        <td>Istanbul,Turkey</td>
                        <td><a class="schools-site" href="https://huseyinburge.meb.k12.tr/" target="_blank">Huseyin
                                Burge</a></td>
                    </tr>
                    <tr class="table-rows">
                        <td>Wuhan University</td>
                        <td>2018</td>
                        <td>Wuhan,China</td>
                        <td><a class="schools-site" href="https://en.whu.edu.cn//" target="_blank">Wuhan
                                University</a></td>
                    </tr>
                </table>

                <table class="certificates">
                    <tr class="table-header">
                        <th>Certificates</th>
                        <th>School</th>
                        <th>Date</th>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=602710a5-de0b-41fb-94bf-d19692e3db64&fn=Coursera+html5.pdf&ct=1620393856979&tl=share-document&rf=link">Introduction
                                to Html 5</a></td>
                        <td>University Of Michigan</td>
                        <td>15.09.2020</td>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=6ea7ba74-c8b5-49f3-b6fd-4bba736ef519&fn=Coursera+Css3+Certificate.pdf&ct=1620393924850&tl=share-document&rf=link">Introduction
                                to CSS3</a></td>
                        <td>University Of Michigan</td>
                        <td>08.10.2020</td>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=e18354a1-775a-4950-b68e-f8ef1f96f47b&fn=Coursera+JavaScript.pdf&ct=1620394012472&tl=share-document&rf=link">Interactiviyt
                                with JavaScript</a></td>
                        <td>University Of Michigan</td>
                        <td>09.12.2020</td>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=dd16af72-396c-4091-9562-3cc470af85a5&fn=Coursera+Responsive+Design.pdf&ct=1620394032754&tl=share-document&rf=link">Advanced
                                Styling with Responsive Design</a></td>
                        <td>University Of Michigan</td>
                        <td>15.10.2020</td>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=74a48d1a-d82e-44e1-9125-048d9bd1ba18&fn=Coursera+Hopkins.pdf&ct=1620394094460&tl=share-document&rf=link">Html,Css
                                and JavaScript for Web Developers</a></td>
                        <td>John Hopkins University</td>
                        <td>05.10.2020</td>
                    </tr>
                    <tr class="table-rows">
                        <td><a
                                href="https://smallpdf.com/shared#st=351d14ca-443f-429e-808f-ab17a3758043&fn=Coursera+HongKong-1.pdf&ct=1620394224027&tl=share-document&rf=link">Front
                                End Web UI Frameworks and Tools:Bootstrap 4</a></td>
                        <td>The Hong Kong University of Science and Technology</td>
                        <td>30.01.2021</td>
                    </tr>

                </table>
            </div>

        </section>
        <footer>
            <div>

        </footer>
    </div>
</main>`
}

function contactRender() {
    return ` <div class="contact-container">
    <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" placeholder="Umut"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" placeholder="Aslan"><br><br>
        <label for="Message">Message</label><br>
        <textarea rows="4" cols="20"></textarea>
        <input type="submit" value="Send">
    </form>
</div>`
}

function aboutRender() {
    return `<div class="main-content">
    <header id="about-header">
        <img id="profile-img" src="https://i.ibb.co/F49STzv/4d1a5a73-309c-4ef1-bf12-e64de110ce5f.jpg"
            alt="Profile Image">
    </header>
    <div class="text-area">
    <p class="about" id="about-body">About Me</p>
    <p class="about"> I am someone who believes that the world we
        live in will be beautiful by creating and
        recognizing new cultures. For this reason, when I
        was 17, I left my family to get to know a country
        and culture that I had never known. I am
        someone who is open to new positions , compatible with team work, and who wants to
        improve myself and continue education while
        working. I think I can compensate the
        inexperienced aspect of mine with my youth, energy and practical intelligence
        </p>
    </div>
    <footer>
        <table id="language">
            <tr class="thead">
                <th>Language</th>
                <th>Level</th>
            </tr>
            <tr>
                <td>Turkish</td>
                <td>Mother Language</td>
            </tr>
            <tr>
                <td>Chinese</td>
                <td>C1</td>
            </tr>
            <tr>
                <td>English</td>
                <td>B2</td>
            </tr>
            <tr>
                <td>German</td>
                <td>B1</td>
            </tr>
            <tr>
                <td>Kurdish</td>
                <td>B2</td>
            </tr>
        </table>
    </footer>
</div>`
}