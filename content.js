/* ================= THIS IS THE FILE YOU EDIT ================= */

/* 1. BASIC DETAILS + HOME PAGE */
const SITE={
 short:"ILCS",
 name:"Indian Liquid Crystal Society",
 tag:"A non-profit society of liquid crystal researchers, established in 1992",
 logo:"images/logo/logo.png",   /* e.g. "images/logo/logo.png" */
 slides:["images/home/slide1.png","images/home/slide2.png","images/home/slide3.png","images/home/slide4.bmp","images/home/slide5.png"],
 stats:[["1992","Established"],["500+","Members"],["33","National conferences"],["1993","First conference, Mysore"]],
 intro:[
  "The Indian Liquid Crystal Society (ILCS) is a non-profit organization established in 1992 under the Societies Registration Act, 1960 by a fraternity of liquid crystal researchers spread across the country. ILCS provides a forum for researchers from academic institutions and industries to exchange information and ideas related to liquid crystal research and technology.",
  "The eminent liquid crystal scientist, Prof. S. Chandrasekhar, FRS, was the founding president of ILCS."
 ],
 membership:"The Society has over 500 members: Ordinary, Life, Student and Institutional. Individuals and institutions are welcome to apply.",
 form:"",   /* TODO: paste your Google Form link for membership applications */
 footer:"© 2026 Indian Liquid Crystal Society (ILCS)",
 links:[{t:"International Liquid Crystal Society",l:"https://www.ilcsoc.org/"},{t:"Contact",l:"page.html?p=contact"}]
};
const FP={n:"Professor S. Chandrasekhar, FRS",r:"Founding President",img:"images/founding-president/chandrasekhar.jpg"};

/* 2. MENU: label + id. "sub" = dropdown options ["Label","id"]. Every id needs a page in PAGES. */
const MENU=[
 {label:"Home",id:"home"},
 {label:"About",id:"about",sub:[["Founding president","founding"],["International status","international"],["Website team","team"]]},
 {label:"Council",id:"https://www.vvjire.in/automation-studio/ilcs"},
 {label:"Awards",id:"awards",sub:[["Call for nominations","nominations"]]},
 {label:"Membership",id:"membership"},
 {label:"Gallery",id:"gallery",sub:[["Past conferences","g-conf"],["Posters won","g-posters"],["Image contest","g-contest"]]},
 {label:"NCLC",id:"nclc"},
 {label:"Contact",id:"contact"}
];

/* 3. HOME "NEWS" (newest first) and 4. HOME "EVENTS" */
const NEWS=[
 {t:"ILCS invites nominations for the ILCS Awards & Recognitions",d:"Check the deadline on the nominations page",l:"page.html?p=nominations"},
 {t:"ILCS Awards List",d:"SC Memorial Lecture, Lifetime achievement, Gold, Silver and Bronze medals",l:"page.html?p=awards"}
];
const EVENTS=[
 {t:"32nd NCLC, BITS Pilani",d:"20–22 November 2025",l:"page.html?p=nclc"},
 {t:"33rd NCLC, Sharda University",d:"19–21 November 2026",l:"https://www.sharda.ac.in/nclc-2026/"}
];

/* 5. WEBSITE TEAM (shown on the front page and footer). Photos go in images/team/ */
const TEAM=[
 {n:"Ankit Gupta",r:"PhD Research Scholar, Physics",i:"Ashoka University",img:"images/team/ankit.jpeg",li:"https://www.linkedin.com/in/ankit-gupta-871b93220",rg:""}, /* TODO: add ResearchGate URL */
 {n:"Pragnesh Vankar",r:"PhD Research Scholar, Chemistry",i:"Shri Govind Guru University",img:"images/team/pragnesh.jpg",li:"http://www.linkedin.com/in/pragnesh-vankar-883251b8",rg:""}
];

/* 6. COUNCIL. Photos go in images/council/ */
const COUNCIL=[https://www.vvjire.in/automation-studio/ilcs],

/* 7. GALLERY. dir = folder; items = ["file name","caption"]. Add a line per photo. */
const GALLERY={
 conf:{dir:"images/gallery/past-conferences/",items:[
  ["nclc-2001.jpg","National Conference on Liquid Crystal – 2001"],
  ["nclc-2003.jpg","National Conference on Liquid Crystal – 2003"],
  ["nclc-2004.jpg","National Conference on Liquid Crystal – 2004"],
  ["nclc-2005.jpg","National Conference on Liquid Crystal – 2005"],
  ["nclc-2018-25th.jpg","25th National Conference on Liquid Crystal – 2018"],
  ["photo-6.jpg","Conference photograph"]]}, /* TODO: update caption */
 posters:{dir:"images/gallery/posters-won/",items:[]},
 contest:{dir:"images/gallery/image-contest/",items:[]}
};

/* 8. AWARDS: [name, year] */
const AWARDS={
 "SC Memorial Lecture":[["Prof. Kattera A. Suresh",2017],["Prof. K. K. Raina",2018],["Prof. K. S. Krishnamurthy",2019],["Prof. S. L. Srivastava",2020],["Prof. S. Krishna Prasad",2021],["Prof. Shri Singh",2022],["Prof. Sandeep Kumar",2023],["Prof. G. S. Ranganath",2024],["Prof. Ravindra Dhar",2025]],
 "Lifetime achievement":[["Prof. K. S. Krishnamurthy",2017],["Prof. K. K. Raina",2017],["Prof. Kattera A. Suresh",2018],["Prof. S. L. Srivastava",2018],["Prof. S. Krishna Prasad",2019],["Prof. Shri Singh",2019],["Prof. Sandeep Kumar",2020],["Prof. R. A. Vora",2020],["Prof. N. V. S. Rao",2021],["Prof. Ashok M. Biradar",2021],["Prof. Bharat T. Thaker",2022],["Prof. V. K. Agrawal",2022],["Prof. C. V. Yelamaggad",2025]],
 "Gold medal":[["Prof. Ravindra Dhar",2017],["Prof. C. V. Yelamaggad",2017],["Dr. D. S. Shankar Rao",2018],["Prof. Rajiv Manohar",2018],["Dr. Geetha G. Nair",2019],["Prof. A. K. Prajapati",2019]],
 "Silver medal":[["Prof. Santanu Kumar Pal",2017],["Prof. Surajit Dhara",2017],["Dr. Praveen Malik",2018],["Prof. Gurumurthy Hegde",2018],["Dr. P. Viswanath",2019],["Prof. A. S. Achalkumar",2019],["Dr. Amitabha Bhattacharyya",2020],["Dr. Manoj B. Pandey",2020],["Dr. V. Jayalakshmi",2021],["Prof. Dharmendra Pratap Singh",2025],["Dr. Gautam Singh",2025]],
 "Bronze medal":[["Dr. M. Srinivasulu",2017],["Dr. G. Shanker",2017],["Dr. Jai Prakash",2018],["Dr. Manoj Mathews",2018],["Dr. Bharat Kumar",2019],["Dr. Anoop K. Srivastava",2019],["Dr. Achu Chandran",2025],["Dr. Prasun Ganguly",2025]]
};

/* 9. NCLC: [number, venue, organizer, date, prize winners] */
const NCLC=[
["1st","Department of Physics, Mysore University, Mysore-570 006","","18–20 October 1993",""],
["2nd","Itanagar","","26–28 December 1994",""],
["3rd","Baroda","","29 September – 1 October 1995",""],
["4th","Thapar Institute of Engg. and Technology, Patiala","","1 November 1996","Ms. Arunima Mukherjee and Ms. Jasjit Kaur Ahuja"],
["5th","Jammu","","18–20 December 1997",""],
["6th","Goa University, Goa","Prof. B. S. Sonde","29–31 October 1998","Mr. Kisor Mukhopadhyay"],
["7th","Mangalore University, Department of Material Science, Mangalagangotri, Mangalore","Prof. Jayagopal Uchil","11–13 November 1999",""],
["8th","Department of Physics, Mumbai University, Mumbai","Dr. S. J. Gupta","28–30 December 2000","Ms. Jaishri J. Naidu"],
["9th","Vijayanagar College & Proudha Devaraya Institute of Technology, T.B. Dam, Hospet","Dr. S. Somasekhara","7–9 September 2001","Ms. K. L. Sandhya (Physics)<br>Ms. Anitha Nagamani (Chemistry)"],
["—","Not conducted","","2002",""],
["10th","Garden City College, Bengaluru","Dr. G. Venkatesh","9–11 October 2003","Mr. Chethan Vishal Lobo<br>Mr. Manoj Mathews"],
["11th","Ewing Christian College, Allahabad, Uttar Pradesh","Dr. Ravindra Dhar","1–3 November 2004","Mr. Gurumurthy Hegde<br>Mr. A. S. Achalkumar"],
["12th","Assam University, Silchar, Assam","Dr. N. V. S. Rao","19–21 December 2005","Mr. A. K. Srivastava<br>Mr. Sudip Choudhury"],
["13th","University of Mysore, Manasagangotri, Mysore","Dr. D. Revannasiddaiah","9–11 October 2006","Ms. V. Jayalakshmi<br>Mr. G. Shanker"],
["14th","Department of Physics, University of North Bengal, Siliguri, West Bengal","Dr. Malay Kumar Das","17–19 December 2007",""],
["15th","Indian Institute of Science, Bangalore","Prof. N. Jayaraman","13–15 October 2008","G. Sai Preeti<br>Hari Krishna Bisoyi"],
["16th","University of Lucknow, Lucknow","Dr. Rajiv Manohar","26–28 October 2009","Suman Kumari & Akhileshwar Prasad<br>G. Sivamohan Reddy & Nirmalangshu Chakraborty"],
["17th","Veer Narmad South Gujarat University, Surat","Prof. Bharat Thaker","15–17 November 2010","Aanchal Dwivedi & Anamika Pramanik<br>Sahoo N. C. & Vishal Modi"],
["18th","North Eastern Regional Institute of Science and Technology, Itanagar","Prof. P. R. Alapati","15–17 November 2011","R. Bhargavi & Abhay S. Pandey<br>Rashmi Prabhu & Y. T. Dhimmer"],
["19th","Thapar University, Patiala","Prof. K. K. Raina","21–23 November 2012","Ramneek Kaur & Dharmendra Pratap Singh<br>Atiqur Rahman Laskar & Sumyra Sidiq"],
["20th","Manipal Institute of Technology, Manipal","Dr. M. Srinivasulu","16–18 December 2013","Ms. Sunita & Ms. Rasmita Sahoo<br>Ms. Shilpa Setia & Ms. Poornima Bhagavath"],
["21st","Vikramajit Singh Sanatan Dharm College, Chhatrapati Shahu Ji Maharaj University, Kanpur","Dr. Manoj B. Pandey","10–12 November 2014","Mr. Anish Chakraborty & Ms. Shivani Pandey<br>Ms. Indu Verma & Mr. K. Swamynathan"],
["22nd","DIT University, Dehradun","Dr. Ravi K. Shukla","21–23 December 2015","M. V. Rasna, University of Hyderabad, Hyderabad & Vandana Sharma, Chitkara University, Jhansla, Patiala<br>Balaram Pradhan, Indian Institute of Technology Guwahati, Guwahati & Ashwath Narayana Gowda, Raman Research Institute, Bengaluru"],
["23rd","Dhanbad, Jharkhand","Dr. Pankaj Mishra","7–9 December 2016","Raj Kumar Khan, University of Calcutta, Kolkata & Ravi Kumar, Indian Institute of Technology, Jharkhand<br>Sachin A. Bhat, Centre for Nano and Soft Matter Sciences, Bengaluru & Vidhika Punjani, Indian Institute of Science Education and Research, Mohali"],
["24th","Indian Institute of Science Education and Research, Mohali","Dr. Santanu Kumar Pal","11–13 October 2017","Pawan Singh, Babasaheb Bhimrao Ambedkar University, Lucknow & Ramasamy Jayaprakasam, Bannari Amman Institute of Technology, Sathyamangalam<br>Gabriel O. Orodepo, Indian Institute of Science, Bengaluru & Ravindra Kumar Gupta, Indian Institute of Technology Guwahati, Guwahati"],
["25th","Centre of Material Sciences, University of Allahabad","Prof. Ravindra Dhar","19–21 December 2018","Susanta Chakraborty, North Bengal University, West Bengal & M. Praveen, University of Hyderabad, Hyderabad<br>Kapil S. Ingle, Visvesvaraya National Institute of Technology, Maharashtra"],
["26th","Chitkara University, Chitkara (Punjab)","Prof. Pankaj Kumar","21–23 October 2019",""],
["27th","Held online at Amity University Uttar Pradesh, Noida","","21–23 December 2020",""],
["28th","Department of Chemistry, Assam University, Silchar","","21–23 December 2021",""],
["29th","Department of Chemistry and Centre for Advanced Research and Development, CHRIST University, Bengaluru","","8–10 December 2022",""],
["30th","Department of Physics, Andhra University, Visakhapatnam","","2–4 November 2023",""],
["31st","Navyug Science College, Surat","","20–22 December 2024",""],
["32nd","Dept. of Physics, Birla Institute of Technology and Science (BITS), Pilani","","20–22 November 2025",""]
];

/* 10. PAGES: id:{title, html} or {title, type, key}. Write normal HTML between the backticks. */
const PAGES={
about:{title:"About",html:`
<p>The Society, apart from conducting its annual professional meetings, organizes conferences pertaining to the science and technology of liquid crystals nationwide.</p>
<h2>Objectives</h2>
<ul>
<li>Recognize, promote and foster talent in experimental and theoretical Liquid Crystal Research.</li>
<li>Popularize Liquid Crystal work in general. To improve the quality of STEM Education at all levels.</li>
<li>Recognize and honor lifetime achievement in research through awards.</li>
<li>Organize conferences, seminars, workshops, symposia, and similar other programs to facilitate and promote Liquid Crystal research in all branches of science.</li>
<li>Interact and coordinate with industry to catalyze the growth of the Liquid Crystal Industry.</li>
<li>Interact with other societies or associations, both in India and abroad, having similar objectives for mutual benefit and to conduct joint programs.</li>
<li>Publish newsletters, journals, books and other forms of communication to highlight the research activities of the Society as also the new developments taking place elsewhere in the field of Liquid Crystals.</li>
<li>Institute and award fellowships, scholarships, stipends, travel grants or otherwise support students and research scholars to encourage them to devote themselves to pursuits in Chemical Science.</li>
</ul>
<h2>Conferences</h2>
<p>The annual conferences organized by ILCS are generally hosted by different universities and academic institutions across the country. The first ILCS Conference was held on 18 October 1993 at the University of Mysore, Mysore, with Prof. S. Chandrasekhar at the helm. It saw many prominent liquid crystal scientists from within the country and abroad sharing their expertise with young researchers and students. The Society has since held 33 national conferences all over India. <a href="page.html?p=nclc">See the full list</a>.</p>`},

founding:{title:"Founding president",html:`
<div class="cards"><div class="card cc"><div class="ph"><img src="images/founding-president/chandrasekhar.jpg" alt="Professor S. Chandrasekhar, FRS" onerror="this.parentNode.classList.add('x');this.remove()"></div>
<h3>Professor S. Chandrasekhar, FRS</h3><p class="r">Founding President of ILCS</p>
<a class="btn o" target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Sivaramakrishna_Chandrasekhar">Read on Wikipedia</a></div></div>
<p><!-- TODO: Write a short biography here. --></p>`},

international:{title:"International status",html:`
<p>The Indian Liquid Crystal Society (ILCS) is affiliated to the International Liquid Crystal Society.</p>
<a class="btn" style="margin-left:0" target="_blank" rel="noopener" href="https://www.ilcsoc.org/Affiliated-Societies/">Affiliated societies, ilcsoc.org</a>`},

team:{title:"Website team",type:"team"},
council:{title:"Council",type:"council"},
awards:{title:"Awards",type:"awards"},

nominations:{title:"Call for nominations",html:`
<p>The Indian Liquid Crystal Society invites nominations for the ILCS Awards & Recognitions. Nominations are to be submitted to the Secretary (<a href="mailto:skpal@iisermohali.ac.in">skpal@iisermohali.ac.in</a>) with a copy to the President of ILCS (<a href="mailto:skumar.sandeep@gmail.com">skumar.sandeep@gmail.com</a>).</p>
<p><b>Nomination deadline: To be announced.</b></p>
<a class="btn" style="margin-left:0" href="files/ILCS_Nomination_Proforma_with_Guidelines.pdf">Download nomination proforma with guidelines (PDF)</a>`},

membership:{title:"Membership",html:`
<p>The Society has over 500 members across Ordinary, Life, Student and Institutional categories. Individuals and institutions may apply for membership using the online form.</p>
<div class="tb"><table><tr><th>Category</th><th>Fee</th></tr>
<tr><td>Ordinary member</td><td>Rs. 100 per annum</td></tr><tr><td>Student member</td><td>Rs. 500 per annum</td></tr>
<tr><td>Life member</td><td>Rs. 3,000</td></tr><tr><td>Institutional member</td><td>Rs. 2,000</td></tr></table></div>
<h2>Bank details for online payment</h2>
<p>Beneficiary: Indian Liquid Crystal Society<br>Bank: State Bank of India, Vyalikaval Branch, Bangalore<br>Account No.: 54033823651<br>IFSC: SBIN0040163</p>
<p>The form asks for: title, name, gender, address with ID proof, email, phone, qualification, institution, area of interest (Physics, Chemistry, Biology, Polymers, Applications, other), membership category, payment receipt and a passport photo.</p>
<a class="btn" style="margin-left:0" href="${SITE.form||'#'}">Apply online</a>`},

gallery:{title:"Gallery",type:"gallery",key:"all"},
"g-conf":{title:"Past conferences",type:"gallery",key:"conf"},
"g-posters":{title:"Posters won",type:"gallery",key:"posters"},
"g-contest":{title:"Image contest",type:"gallery",key:"contest"},
nclc:{title:"National Conference on Liquid Crystals (NCLC)",type:"nclc"},

contact:{title:"Contact",html:`
<div class="cards">
<div class="card"><h3>Indian Liquid Crystal Society (ILCS)</h3><p>Centre for Nano and Soft Matter Sciences (CeNS)<br>Arkavathi, Survey No.7, Shivanapura,<br>Dasanapura Hobli, Bengaluru – 562162</p></div>
<div class="card"><h3>Prof. Sandeep Kumar</h3><p class="r">President</p><p>Department of Chemistry and Biochemistry<br>Sharda University, Greater Noida – 201310<br><a href="mailto:skumar.sandeep@gmail.com">skumar.sandeep@gmail.com</a></p></div>
<div class="card"><h3>Prof. S. K. Pal</h3><p class="r">Secretary</p><p>Department of Chemistry, IISER Mohali<br><a href="mailto:skpal@iisermohali.ac.in">skpal@iisermohali.ac.in</a></p></div>
<div class="card"><h3>Dr. P. Viswanath</h3><p class="r">Invited Council Member & Treasurer</p><p>CeNS, Bengaluru<br><a href="mailto:viswanath@cens.res.in">viswanath@cens.res.in</a></p></div>
<div class="card"><h3>Prof. C. V. Yelamaggad</h3><p class="r">Vice President</p><p>CeNS, Bengaluru<br><a href="mailto:yelamaggad@cens.res.in">yelamaggad@cens.res.in</a></p></div>
</div>`}
};
