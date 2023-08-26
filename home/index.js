<template>
  <div class="home-container">
    <div class="home-hero">
      <h1 class="home-text">Farmland</h1>
      <header data-role="Header" class="home-header">
        <div class="home-nav"></div>
        <navigation-links4 rootClassName="rootClassName10"></navigation-links4>
        <div class="home-btn-group">
          <button class="home-login button">Login</button>
          <button class="home-register button">Register</button>
        </div>
        <div data-role="BurgerMenu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" class="home-mobile-menu">
          <div class="home-nav1">
            <div class="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                class="home-image"
              />
              <div data-role="CloseMobileMenu" class="home-menu-close">
                <svg viewBox="0 0 1024 1024" class="home-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <navigation-links4
              rootClassName="rootClassName11"
            ></navigation-links4>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" class="home-icon04">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon06">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon08">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <div class="home-container02">
        <h1 class="home-text01">Building a farmers community</h1>
        <span class="home-text02">
          Revolutionizing our agricultural sector by connecting farmers from all
          over the nation and organic lovers. We offer 100% organic and natural
          products which come straight from farmers.
        </span>
        <button class="home-button button">Get Started</button>
      </div>
    </div>
    <div class="home-banner">
      <h1 class="home-text03">Our Mission</h1>
      <span class="home-text04">
        Our Mission is to eliminate the gap between farmers and consumers. Our
        platform connects and brings farmers and consumers in one place where they
        can trade or purchase their own products. 
      </span>
      <div class="home-container03">
        <input
          type="text"
          placeholder="Email here..."
          class="home-textinput input"
        />
        <div class="home-container04">
          <button class="home-button1 button">Subscribe</button>
        </div>
      </div>
      <div class="home-gallery">
        <div class="home-features">
          <h1 class="home-text05">
            <span>Explore our Products</span>
            <br />
          </h1>
          <div class="home-blog-post-card">
            <img
              alt="image"
              src="/oip%20(1)-1500h.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              class="home-image1"
            />
            <div class="home-container05">
              <h1 class="home-text08">Fruits &amp; Vegetables</h1>
              <span class="home-text09">
                We offer a wide range of organic fruits and vegetables which come
                straight from the farmers all over the nation. 
              </span>
              <div class="home-container06">
                <span class="home-text10">Read More -&gt;</span>
              </div>
            </div>
          </div>
          <div class="home-blog-post-card1">
            <img
              alt="image"
              src="/oip%20(2)1-1100w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              class="home-image2"
            />
            <div class="home-container07">
              <h1 class="home-text11">Green Manure</h1>
              <span class="home-text12">
                Fertilizers and pesticides have often caused lots of issues in
                terms of agriculture and crop quality growth. We offer good
                organic compost and green manure for better soil health.
              </span>
              <div class="home-container08">
                <span class="home-text13">Read More -&gt;</span>
              </div>
            </div>
          </div>
          <div class="home-blog-post-card2">
            <img
              alt="image"
              src="/oip%20(1)1-1100w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              class="home-image3"
            />
            <div class="home-container09">
              <h1 class="home-text14">Diary Products</h1>
              <span class="home-text15">
                Our fresh and 100% organic paraben-free diary products like
                cheese, milk and various other products help maintain your health.
              </span>
              <div class="home-container10">
                <span class="home-text16">Read More -&gt;</span>
              </div>
            </div>
          </div>
          <div class="home-blog-post-card3">
            <img
              alt="image"
              src="/ece62a2cb641d8886423a435e662335c-1100w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              class="home-image4"
            />
            <div class="home-container11">
              <h1 class="home-text17">Accessories</h1>
              <span class="home-text18">
                Our platform also offers organic accessories like organic
                utensils, key chains, bags etc.
              </span>
              <div class="home-container12">
                <span class="home-text19">Read More -&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-features1">
        <h1 class="home-text20">
          <span>Discover our</span>
          <br />
          <span>unique features</span>
        </h1>
        <div class="home-separator"></div>
        <div class="home-container13">
          <div class="home-container14">
            <div class="home-feature-card">
              <svg viewBox="0 0 1024 1024" class="home-icon10">
                <path
                  d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                ></path>
              </svg>
              <h2 class="home-text24">Barter System</h2>
              <span class="home-text25">
                We are bringing back exchange of goods and services.
              </span>
            </div>
          </div>
          <div class="home-feature-card1">
            <svg viewBox="0 0 1024 1024" class="home-icon12">
              <path
                d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
              ></path>
            </svg>
            <h2 class="home-text26">No need of third- party sources </h2>
            <span class="home-text27">
              We take care of everything that stands between you and our empowered
              farmers
            </span>
          </div>
          <img alt="image" src="/oip1-500h.jpg" class="home-image5" />
        </div>
      </div>
    </div>
    <div class="home-features2">
      <div class="home-gallery1">
        <h1 class="home-text28">Our portfolio</h1>
        <div class="home-container15">
          <gallery-card3
            image_src="/r-1500h.jpg"
            rootClassName="rootClassName"
          ></gallery-card3>
          <gallery-card3
            image_src="/r%20(1)-1500h.jpg"
            rootClassName="rootClassName1"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(6)-1500h.jpg"
            rootClassName="rootClassName3"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(1)-1500h.jpg"
            rootClassName="rootClassName2"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(8)-1500h.jpg"
            rootClassName="rootClassName4"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(7)-1500h.jpg"
            rootClassName="rootClassName5"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip-1500h.jpg"
            rootClassName="rootClassName6"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(3)-1500h.jpg"
            rootClassName="rootClassName7"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(5)-1500h.jpg"
            rootClassName="rootClassName8"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(2)-1500h.jpg"
            rootClassName="rootClassName9"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(9)-1500h.jpg"
            rootClassName="rootClassName10"
          ></gallery-card3>
          <gallery-card3
            image_src="/oip%20(4)1-1500h.jpg"
            rootClassName="rootClassName11"
          ></gallery-card3>
        </div>
      </div>
    </div>
    <div class="home-social-bar">
      <svg viewBox="0 0 950.8571428571428 1024" class="home-icon14">
        <path
          d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
        ></path></svg
      ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon16">
        <path
          d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
        ></path></svg
      ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon18">
        <path
          d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
        ></path></svg
      ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon20">
        <path
          d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="home-icon22">
        <path
          d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import NavigationLinks4 from './navigation-links4'
import GalleryCard3 from './gallery-card3'

export default {
  name: 'Home',
  props: {},
  components: {
    NavigationLinks4,
    GalleryCard3,
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-color: #D9D9D9;
  background-image: url("/1822_5a0c10259f2669a05a1ec8af40f05989_large-1500h.jpg");
  background-position: bottom;
}
.home-text {
  color: var(--dl-color-gray-white);
  font-size: 50px;
  box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
  font-style: normal;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
.home-header {
  width: 100%;
  height: 145px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-nav {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
}
.home-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-login {
  color: var(--dl-color-gray-white);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  background-color: var(--dl-color-gray-black);
}
.home-register {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.home-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container01 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-image {
  height: 2rem;
}
.home-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-container02 {
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-text01 {
  color: var(--dl-color-gray-white);
  width: 443px;
  height: 179px;
  font-size: 3rem;
  max-width: 25rem;
}
.home-text02 {
  color: var(--dl-color-gray-white);
  font-size: 1.15rem;
  max-width: 60%;
  margin-top: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-threeunits);
}
.home-button {
  color: var(--dl-color-gray-white);
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 400;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-black);
}
.home-button:hover {
  transform: scale(1.02);
}
.home-banner {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  background-size: cover;
  justify-content: space-between;
  background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
  background-position: center;
}
.home-text03 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text04 {
  max-width: var(--dl-size-size-maxwidth);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container03 {
  flex: 0 0 auto;
  width: 1100px;
  height: 140px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.home-textinput {
  font-size: 0.75rem;
  border-color: var(--dl-color-gray-500);
}
.home-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-button1 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-black);
}
.home-button1:hover {
  color: var(--dl-color-gray-black);
  background-color: transparent;
}
.home-gallery {
  width: 100%;
  height: 1669px;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  background-color: #D9D9D9;
  grid-template-columns: 1fr 1fr 1fr;
}
.home-features {
  width: 1055px;
  height: 1620px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
.home-text05 {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-blog-post-card {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-blog-post-card:hover {
  transform: scale(1.02);
}
.home-image1 {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.home-container05 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-success-700);
}
.home-text08 {
  margin-bottom: var(--dl-space-space-twounits);
}
.home-text09 {
  color: var(--dl-color-gray-black);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container06 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text10 {
  color: var(--dl-color-gray-black);
  font-style: normal;
  font-weight: 500;
}
.home-blog-post-card1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-blog-post-card1:hover {
  transform: scale(1.02);
}
.home-image2 {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.home-container07 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-danger-700);
}
.home-text11 {
  margin-bottom: var(--dl-space-space-twounits);
}
.home-text12 {
  color: var(--dl-color-gray-black);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container08 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text13 {
  color: var(--dl-color-gray-black);
  font-style: normal;
  font-weight: 500;
}
.home-blog-post-card2 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-blog-post-card2:hover {
  transform: scale(1.02);
}
.home-image3 {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.home-container09 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-danger-300);
}
.home-text14 {
  margin-bottom: var(--dl-space-space-twounits);
}
.home-text15 {
  color: var(--dl-color-gray-black);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container10 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text16 {
  color: var(--dl-color-gray-black);
  font-style: normal;
  font-weight: 500;
}
.home-blog-post-card3 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-blog-post-card3:hover {
  transform: scale(1.02);
}
.home-image4 {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.home-container11 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-text17 {
  margin-bottom: var(--dl-space-space-twounits);
}
.home-text18 {
  color: var(--dl-color-gray-500);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container12 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text19 {
  color: var(--dl-color-gray-black);
  font-style: normal;
  font-weight: 500;
}
.home-features1 {
  width: 100%;
  height: 810px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  flex-direction: column;
}
.home-text20 {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-separator {
  width: 100px;
  height: 2px;
  background-color: var(--dl-color-gray-500);
}
.home-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-container14 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.home-feature-card {
  width: 228px;
  height: 189px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-icon10 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text24 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text25 {
  color: var(--dl-color-gray-700);
}
.home-feature-card1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-icon12 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text26 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text27 {
  color: var(--dl-color-gray-700);
}
.home-image5 {
  width: 450px;
  height: 450px;
  object-fit: cover;
  flex-shrink: 0;
  margin-left: var(--dl-space-space-fourunits);
  border-radius: var(--dl-radius-radius-round);
  object-position: left;
}
.home-features2 {
  width: 100%;
  height: 1187px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  flex-direction: column;
}
.home-gallery1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.home-text28 {
  height: 131px;
  font-size: 3rem;
  text-align: center;
}
.home-container15 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-unit);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.home-social-bar {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-icon14 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon16 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon18 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon20 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon22 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 991px) {
  .home-text04 {
    width: 100%;
  }
  .home-gallery {
    grid-template-columns: 1fr 1fr;
  }
  .home-text05 {
    text-align: center;
  }
  .home-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
  .home-blog-post-card1 {
    flex-direction: row;
    justify-content: space-between;
  }
  .home-blog-post-card2 {
    flex-direction: row;
    justify-content: space-between;
  }
  .home-blog-post-card3 {
    flex-direction: row;
    justify-content: space-between;
  }
  .home-features1 {
    align-items: center;
  }
  .home-container13 {
    flex-direction: column;
  }
  .home-image5 {
    width: 300px;
    height: 300px;
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
  }
  .home-container15 {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media(max-width: 767px) {
  .home-hero {
    align-items: center;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-nav {
    display: none;
  }
  .home-btn-group {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-text01 {
    text-align: center;
  }
  .home-text02 {
    max-width: 100%;
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text04 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text05 {
    text-align: center;
  }
  .home-blog-post-card {
    flex-direction: column;
  }
  .home-image1 {
    width: 100%;
  }
  .home-blog-post-card1 {
    flex-direction: column;
  }
  .home-image2 {
    width: 100%;
  }
  .home-blog-post-card2 {
    flex-direction: column;
  }
  .home-image3 {
    width: 100%;
  }
  .home-blog-post-card3 {
    flex-direction: column;
  }
  .home-image4 {
    width: 100%;
  }
  .home-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text20 {
    text-align: center;
  }
  .home-container13 {
    flex-direction: column;
  }
  .home-features2 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-gallery1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container15 {
    grid-template-columns: 1fr 1fr;
  }
  .home-social-bar {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .home-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-header {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu {
    padding: 16px;
  }
  .home-text02 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-button {
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-banner {
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .home-container03 {
    align-items: center;
    flex-direction: column;
  }
  .home-button1 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .home-gallery {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container06 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text10 {
    width: auto;
  }
  .home-container08 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text13 {
    width: auto;
  }
  .home-container10 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text16 {
    width: auto;
  }
  .home-container12 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text19 {
    width: auto;
  }
  .home-features1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container14 {
    grid-template-columns: 1fr;
  }
  .home-text24 {
    font-style: normal;
    font-weight: 600;
  }
  .home-text26 {
    font-style: normal;
    font-weight: 600;
  }
  .home-image5 {
    width: 250px;
    height: 250px;
  }
  .home-features2 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-gallery1 {
    padding: var(--dl-space-space-unit);
  }
  .home-container15 {
    grid-template-columns: 1fr;
  }
  .home-social-bar {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
