const express =  require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();

app.use(cors())
app.use(bodyParser.json())

const accessToken = "asfsdfasdfasdfrtwetrwerwetr"

app.get("/", (req,res)=>{
    res.json({status:true});
})




app.post("/api/v1/login", (req,res)=>{
    console.log(req.body)
    if(req.body.username =="admin" && req.body.password=="admin"){
        res.json({ok:true, accessToken:accessToken})
    }else{
        res.status(403).send()
    }
})
app.post("/api/v1/register", (req,res)=>{
    console.log(req.body)
    res.json({responseCode:"true", activationCode:"12345"})
})
// app.use((req,res,next)=>{
//     if(req.headers["authorization"]== accessToken){
//         return next()
//     }else{
//         res.status(403).send()
//     }
// })

app.post("/api/v1/sanses", (req,res)=>{
        console.log(req.body)
        switch(req.body.filmCode){
            case "0":
                    res.json({
                        filmName:"لیلاج",
                        imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/leilaj2.jpg",
                        sanses:([
                            {showDay:"دوشنبه",
                            showDate:"1398/10/5",
                            times:([
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                            ]),},
                            {showDay:"سه شنبه",
                            showDate:"1398/10/3",
                            times:([
                                {sansCode:"0",sansHour:"14:45",salon:"سالن دو",sansPrice:"10000",buyTicket:true},
                                {sansCode:"1",sansHour:"17:45",salon:"سالن دو",sansPrice:"25000",buyTicket:false},
                                {sansCode:"2",sansHour:"15:00",salon:"سالن شش",sansPrice:"35000",buyTicket:true},
                                {sansCode:"3",sansHour:"10:30",salon:"سالن شش",sansPrice:"15000",buyTicket:true},
                            ]),},
                            {showDay:"چهار شنبه",
                            showDate:"1398/10/5",
                            times:([
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                            ]),},
                            {showDay:"پنج شنبه",
                            showDate:"1398/10/5",
                            times:([
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                                {sansCode:"4",sansHour:"14:45",salon:"سالن سه",sansPrice:"10000",buyTicket:true},
                                {sansCode:"5",sansHour:"17:45",salon:"سالن چهار",sansPrice:"25000",buyTicket:true},
                                {sansCode:"6",sansHour:"15:00",salon:"سالن دو",sansPrice:"35000",buyTicket:true},
                                {sansCode:"7",sansHour:"10:30",salon:"سالن یک",sansPrice:"15000",buyTicket:false},
                            ]),},
                            
                            
                        ])
                    })
                break;
        }
        
        // switch(req.body.filmCode){ 
            
        //     case "0":
        //         res.json({
        //                 filmName:"لیلاج",
        //                 imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/leilaj2.jpg",
        //                 // sanses:([
        //                 //     {showDay:"سه شنبه",
        //                 //     showDate:"1398/10/3",
        //                 //     times:([
        //                 //         {sansCode:"0",sansHour:"14:45",salon:"سالن دو",sansPrice:"10000",buyTicket:true},
        //                 //         {sansCode:"1",sansHour:"17:45",salon:"سالن دو",sansPrice:"25000",buyTicket:true},
        //                 //         {sansCode:"2",sansHour:"15:00",salon:"سالن شش",sansPrice:"35000",buyTicket:true},
        //                 //         {sansCode:"3",sansHour:"10:30",salon:"سالن شش",sansPrice:"15000",buyTicket:true},
        //                 //     ]),},
                            
                               
        //                 // ])
        //         })
        //      break; 
            // case "1":
            //     res.json({
            //             filmName:"۲۳ نفر",
            //             imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dast-ha.jpg",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;  
            // case "2":
            //     res.json({
            //             filmName:"دختر شیرازی",
            //             imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dokhtarshirazi.jpg",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;  
            // case "3":
            //     res.json({
            //             filmName:"آخرین داستان",
            //             imageUrl:"https://cinematicket.org/build/images/akharinDastan/web12.png",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;  
            // case "4":
            //     res.json({
            //             filmName:"معکوس",
            //             imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/maakoosss.jpg",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;  
            // case "5":
            //     res.json({
            //             filmName:"چشم و گوش بسته",
            //             imageUrl:"https://cinematicket.org/build/images/cheshmOgoshBaste/001.png",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;  
            // case "6":
            //     res.json({
            //             filmName:"سمفونی نهم",
            //             imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/-Symphony-no-9-copy-(2).jpg",
            //             sanses:([
            //                     {sansCode:"0",showDate:"1398/10/3",showDay:"سه شنبه",sansHour:"14:45",salon:"سالن شش",sansPrice:"10000",buyTicket:true},
            //                     {sansCode:"1",showDate:"1398/10/4",showDay:"چهار شنبه",sansHour:"15:45",salon:"سالن هفت",sansPrice:"10000",buyTicket:false},
            //                     {sansCode:"2",showDate:"1398/10/5",showDay:"پنج شنبه",sansHour:"17:45",salon:"سالن دو",sansPrice:"20000",buyTicket:true},
            //                     ])
            //     })
            // break;   
        }
    )
app.get("/api/v1/movies", (req, res)=>{
    res.json([
        {id:"0", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/leilaj2.jpg"},
        {id:"1", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dast-ha.jpg"},
        {id:"2", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dokhtarshirazi.jpg"},
        {id:"3", imageUrl:"https://cinematicket.org/build/images/akharinDastan/web12.png"},
        {id:"4", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/maakoosss.jpg"},
        {id:"5", imageUrl:"https://cinematicket.org/build/images/cheshmOgoshBaste/001.png"},
        {id:"6", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/-Symphony-no-9-copy-(2).jpg"},
        {id:"8", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/Torna2.jpg"},
        {id:"9", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/beniamin.jpg"},
        {id:"10", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/13980801105540541187315910.jpg"},
        {id:"11", imageUrl:"https://cinematicket.org/build/images/hezarto/MazeFront.png"},
        {id:"12", imageUrl:"https://cinematicket.org/build/images/maskharebaz/Characters.jpg"},
        {id:"13", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/DARKHOONGAH--120-x-180---Design-01.jpg"},
        {id:"14", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/jandarposter.jpg"},
        {id:"15", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dast-ha.jpg"},
        {id:"16", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/dokhtarshirazi.jpg"},
        {id:"17", imageUrl:"https://cinematicket.org/build/images/akharinDastan/web12.png"},
        {id:"18", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/maakoosss.jpg"},
        {id:"19", imageUrl:"https://cinematicket.org/build/images/cheshmOgoshBaste/001.png"},
        {id:"20", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/-Symphony-no-9-copy-(2).jpg"},
        {id:"22", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/Torna2.jpg"},
        {id:"23", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/beniamin.jpg"},
        {id:"24", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/13980801105540541187315910.jpg"},
        {id:"25", imageUrl:"https://cinematicket.org/build/images/hezarto/MazeFront.png"},
        {id:"26", imageUrl:"https://cinematicket.org/build/images/maskharebaz/Characters.jpg"},
        {id:"27", imageUrl:"https://cdn.cinematicket.org/images/filmposter/98/DARKHOONGAH--120-x-180---Design-01.jpg"},
        ])
})

app.post("/api/v1/movie_detail", (req,res)=>{
    console.log(req.body)
    switch(req.body.id){ 
        case "0":
            res.json(
            {limit:"12",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/vWeB4/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/leilaj2.jpg",rate:"1.1", title:"لیلا ج", genre:"اجتماعی", duration:"76", director:"داریوش یاری", producer:"علیرضا ابوالقاسمی‌نژاد", year:"1398", actors:"مهران احمدی, حامد کمیلی, محیا دهقانی, رضا اخلاقی راد, نسرین بابایی, مجید پتکی", others:"نویسنده: سارا خسرو آبادی، دستیاراول کارگردان و برنامه ریز: وحید کاشی، مدیرفیلمبرداری: حمید مهرافروز، تدوین: عماد خدابخش، طراح چهره‌پردازی: شهرام خلج، صدابردار: مجید هاشمی پور، صداگذار: آرش قاسمی، موسیقی: فردین خلعتبری، طراح صحنه و لباس: حمید شهیری، مدیر تولید: علی خلیلی، منشی صحنه: آیلار تقوی، عکاس: محمدرضا اصفهانی، مدیر روابط عمومی و رسانه: سپیده آرمان، سرمایه‌گذاران: علیرضا ابولقاسمی نژاد، داریوش یاری",Summary:"رعنا نوازنده ساز در شرف برگزاری کنسرتی در اروپاست که باخبر می شود دخترش برای نجات پدرش به زادگاه رعنا رفته است. جایی که رعنا شانزده سال پیش درست در سن دخترش از آنجا فرار کرده است. رعنا کنسرت را رها میکند..."}, 
            )
        break;  
        case "1":
            res.json(
            {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/R9JVx/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/dast-ha.jpg",rate:"0", title:"۲۳ نفر", genre:"دفاع مقدس", duration:"100", director:"مهدی جعفری", producer:"مجتبی فرآورده", year:"1397", actors:"رضا نوری، مجید پتکی، عبدالحلیم تقبلی", others:"فیلمنامه نویس: مهدی جعفری، مدیر فیلمبرداری: مرتضی قیدی، صدابردار: بهمن اردلان، چهره پرداز: عباس عباسی، طراح صحنه: کامیاب امین عشایری، طراح لباس: سارا سمیعی، تدوین: میثم مولایی، صداگذاری: بهمن اردلان: موسیقی: اریا عظیمی نژاد، جلوه های ویژه بصری: هادی اسلامی و امیر سحرخیز، جلوه های میدانی: محسن روزبهانی",Summary:""}, 
            )
        break; 
        case "2":
            res.json(
            {limit:"12",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/F7pUB/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/dokhtarshirazi.jpg",rate:"3.3", title:"خداحافظ دختر شیرازی", genre:"رمانتیک - عاشقانه", duration:"87", director:"افشین هاشمی", producer:"فرشته طائرپور", year:"1397", actors:"شبنم مقدمی، افشین هاشمی، آیسان حداد، مونا فرجاد، حسین محب‌اهری، ونوس شمس و رویا تیموریان", others:"نویسنده: افشین هاشمی، مدیر فیلمبرداری: محمد حدادی، طراح صحنه و لباس: نازنین توسلی، طراح چهره‌پردازی: رضا عربی، دستیار کارگردان و برنامه‌ریز: سیاوش رمضانلو، عکاس: منوچهر مرزبان، روابط عمومی: علی زادمهر مدیر تولید: حسین فرخزاد، مجری طرح: عباس امینی، سعید صفرپور، سرمایه‌گذاران: علی طلوعی، افشین هاشمی، فرشته طائرپور، تهیه‌کننده: فرشته طائرپور.",Summary:"یکی از شیراز، یکی از آبادان، هر ۲ در تهران! مجبورند فعلن با هم سر کنند تا محمودِ نارفیق را پیدا کنند."}, 
            )
        break;
        case "3":
                res.json(
                {limit:"12",trailerUrl:"",imgurl:"https://cinematicket.org/build/images/akharinDastan/web12.png",rate:"3.6", title:"آخرین داستان", genre:"", duration:"", director:"اشکان رهگذر", producer:"استودیو هورخش", year:"", actors:"صداپیشه‌گان: پرویز پرستویی، لیلا حاتمی، حامد بهداد، اشکان خطیبی، اکبر زنجانپور، بیتا فرهی، حسن پورشیرازی، فرخ نعمتی، مجید مظفری، بانیپال شومون، شقایق فراهانی، باران کوثری، زهیر یاری، ملیکا شریفی‌نیا.", others:"مدیران اجرایی: آرمان رهگذر، احسان رهگذر، لورین هال، آهنگساز: کریستف رضاعی، انتخاب صداپیشه‌گان: تینا پاکروان، تدوین: ژینوس پدرام، طراحی و ترکیب، صدا: علیرضا علویان، ضبط صدا: رضا عسگرزاده، ویرایش و بازنگری متن: محمد چرمشیر، سرپرستان متحرک‌سازی: بابک ارجمند، ریحانه میرهاشمی، حامد شاملو، سرپرست لیپ‌سینک: نگین خواجه‌ای، سرپرست دسن و رنگ: مهشاد منقش صنعتی، طراح و انیماتور افکت سکانس‌های آغازین: امیرکاظمی، سرپرست طراحی بک‌گراند: رسول رضایی‌جو، سرپرست انیمیشن نور و سایه: آرزو پیشگاهی، سیداسفندیار سیداسدالهی، سرپرست جلوه‌های ویژه سه‌بعدی: علیرضا مالمیری، سرپرستان کامپوزیت: نگار صدری، گلی شریف‌بختیار، عکاسی پشت صحنه: امیر عابدی",Summary:"در دورانی که سایه اهریمن بر سرزمین‌ها سیطره یافته، «جمشید کی» در مقابل سپاهیان اهریمن صف‌آرایی می‌کند و به خواست یزدان بر اهریمنیان ظفر می‌یابد. او مغرور از ظفر، خود را دارای فراست ایزدی می‌داند، پس یزدان از وی روی بر‌گردانده و فر او را می‌ستاند. جمشید، گرفتار جنونی سیری ناپذیر می‌شود. وی دخترش «شهرزاد» را تنها می‌گذارد و با سپاهی از غیورترین سربازانش برای شکار اهریمن عازم سرزمین‌های شمالی می‌شود به شورای وزراء وصیت می‌کند تا در زمان غیابش «مرداس» متحد و والی سرزمین‌های جنوبی بر تختش تکیه زند. با رفتن جمشید کودکی در دل مردمان سرزمین «جمکرد» در آغوش کشاورز زاده‌ای متولد می‌شود که نامش را «آفریدون» می‌گذارند. در همین حال خبر می‌رسد که مرداس مرده است و فرزندش «ضحاک» به نیابت از وی برای به عهده گرفتن زمام تاج و تخت جمشید به جمکرد می‌آید."}, 
                )
        break;
        case "4":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/ZqPB2/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/maakoosss.jpg",rate:"3.1", title:"معکوس", genre:"اکشن", duration:"103", director:"پولاد کیمیایی", producer:"مسعود کیمیایی", year:"1397", actors:"اکبر زنجانپور، بابک حمیدیان، شهرام حقیقت دوست، لیلا زارع و علیرضا کمالی", others:"",Summary:"«معکوس» فیلمی اجتماعی و خانواده‌محور است که لایه‌هایی از اکشن هم دارد."}, 
                )
        break;
        case "5":
                res.json(
                {limit:"",trailerUrl:"",imgurl:"https://cinematicket.org/build/images/cheshmOgoshBaste/001.png",rate:"3.5", title:"چشم و گوش بسته", genre:"", duration:"", director:"فرزاد موتمن", producer:"امیرحسین آشتیانی پور", year:"", actors:"امین حیایی, بهرام افشاری, آناهیتا درگاهی, مسعود کرامتی, لیندا کیانی, محمدرضا صولتی و مانی حقیقی، با حضور پوریا پورسرخ", others:"نویسنده فیلمنامه:هما بذرافشان ، مدیرفیلمبرداری:محمدرضا سکوت، موسیقی: بابک میرزاخانی، صدابرداری:بهروز معاونیان، آرش نجفیان، فرزان معاونیان ، تدوین:عماد خدابخش ، مدیربرنامه ریزی و سرپرست گروه کارگردانی:منصوروثوقی ، دستیار اول کارگردان:سعید غلامی، طراحی صحنه و لباس:فرحناز نادری ، طراح گریم:امیرترابی، منشی صحنه:دنیا راد ،جلوه های ویژه میدانی: آرش آقابیگ ، عکاس و فیلمبردار پشت صحنه:رامونا میریان ، مدیر تولید:حسین بشگرد ، مدیر تدارکات:سجاد نوری ، مجری طرح:نیما حسنی نسب.",Summary:"مردی توسط یک زن تبهکار کُشته میشود و دو غریبه را به جرم قتل بازداشت میکنند. یکی صحنه قتل را ندیده چون نابیناست، آن یکی هم فقط صحنه را دیده چون ناشنواست! آنها یک صبح تا غروب فرصت دارند که از این مهلکه جان سالم به در ببرند ..."}, 
                )
        break;
        case "6":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/6ZLS4/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/-Symphony-no-9-copy-(2).jpg",rate:"3.3", title:"سمفونی نهم", genre:"اجتماعی", duration:"", director:"محمدرضا هنرمند", producer:"زینب تقوایی", year:"1397", actors:"حمید فرخ‌نژاد، ساره بیات، محمدرضا فروتن، مهرداد صدیقیان، علیرضا کمانی، هدی زین‌العابدین، پژمان بازغی", others:"فیلمنامه‌نویس: محمدرضا هنرمند، حامد افضلی، مدیر فیلمبرداری: هومن بهمنش، صدابردار: مهدی ابراهیم‌زاده، چهره‌پردازی: مجید اسکندری، طراح صحنه و لباس: مشکین مهرگان، تدوین: محمدرضا مویینی، صداگذار: حسین ابوالصدق، موسیقی: امین هنرمند",Summary:"مرگ و عشق دربانی هستند که در اصل قهرمان زن فیلم را به بهشت می‌برند."}, 
                )
        break;
        case "8":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/jo3aX/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/Torna2.jpg",rate:"3.3", title:"تورنادو", genre:"تخیلی", duration:"", director:"سید جواد هاشمی", producer:"سید جواد هاشمی", year:"1397", actors:"اکبر عبدی، کامران تفتی، بهنوش بختیاری، الناز حبیبی، ارسلان قاسمی، عباس جمشیدی، وحید نفر، امیر رونقی، راستین عزیزپور، امیررضا احمدی، محمدمهدی ایرانی و نگار نافذ", others:"نویسنده: سیدجواد هاشمی، مدیر فیلمبرداری: وحید ابراهیمی، تدوین: سید جواد هاشمی،مهران گنبدلو، طراح صحنه: علی شایان فر، مجری طرح و سرمایه گذار: حسین احمدی، مدیر صدابرداری: احمد اردلان، طراحی صدا: علی ابوالصدق، موسیقی: بهنام صبوحی، طراح حرکات موزون: سید کمال رضوی، طراح لباس: سوسن نوروزی، طراح گریم: شهرام خلج، دکوراتور: امیر قدیریان، مدیر تولید: ایرج طایفه، جانشین تهیه کننده و دستیار اول کارگردان: عباس دلدار، منشی صحنه: فرزانه زهره وند، عکاس: پیام نصیری خرم، جلوه های ویژه بصری: محمدرضا نجفی امامی، مجری طرح و سرمایه گذار: حسین احمدی",Summary:"فیلم داستان پروفسوری را روایت می‌کند که موفق به ساخت یک رستوران شده است. رستورانی که در نهایت به یک سفینه تبدیل می‌شود. حال با ورود چهار نوجوان به قصه و با شیطنت آنان، این سفینه مقداری زودتر از موعد به پرواز درمی‌آید. سفینه در نهایت به فضا رفته و در یک سرزمین ناشناخته فرود می آید."}, 
                )
        break;
        case "9":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/esdWS/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/beniamin.jpg",rate:"3.4", title:"بنیامین", genre:"انیمیشن", duration:"", director:"محسن عنایتی", producer:"مصطفی حسن آبادی", year:"1397", actors:"گویندگان: چنگیز جلیلوند، ناصر طهماسب، اکبر منانی، سعید مظفری، مریم شیرزاد، تینا هاشمی، آرزو آفری", others:"موسیقی: بهزاد عبدی ( ارکستر ویرتوزهای کیف در اوکراین ) مدیر دوبلاژ: امیر زند صداگذار: فرشید جلیلی مدیر تولید: جواد رضایی کارگردان هنری: حامد فرهادی سرپرست انیمیت: علی رضا زارع داینامیک لباس: علی اکبر مزرعتی جلوه‌های ویژه: ابوالفضل مزرعتی ریگ و استخوان گذاری: میلاد مزرعتی مدیر روابط عمومی: مسعود مزرعتی برنامه نویسی: حسین قاسمی صدابردار: سینا زند مدیر تبلیغات: هادی اسماعیلی دستیار تبلیغات: وحید محرابیان",Summary:"خرابکاری‌ آشر، دوست بامزه اما دست و پا چلفتی بنیامین باعث اسارت مادر بنیامین توسط سربازان پادشاه می‌شود. بنیامین تصمیم می‌گیرد برای نجات مادرش به سفری پرخطر برود و این سرآغازی است برای ماجراهای پرفراز و نشیب بنیامین و آشر"}, 
                )
        break;
        case "10":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/Ju7Wm/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/13980801105540541187315910.jpg",rate:"3.9", title:"منطقه پرواز ممنوع", genre:"", duration:"84", director:"امیر داسارگر", producer:"حامد بامروت نژاد", year:"1398", actors:"هادی حجازی فر، محمد فیلی، متین‌پاکزاد، متین کرمانی، علیرضا اکبری، علی ذکریایی، زین العابدین تقی پور و بهار نوحیان", others:"مدیر فیلمبرداری: علی رنجبر، طراح صحنه و لباس: پیام حسین سوری، طراح گریم: امیر ترابی، صدابردار: سعید بجنوردی، جلوه های ویژه بصری: سید هادی اسلامی، جلوه های ویژه میدانی: محمدرضا ترکمان و حمید رسولیان، دستیار اول کارگردان: سید احمد حسینی، مدیر برنامه ریزی: مهدیار عقابی، بازیگردان نوجوان: زین العابدین تقی پور، تدوین: ابوذر حیدری، مدیر تولید: سید صادق حسینی، جانشین تولید: سید مهدی حسینی.",Summary:"فیلم ماجراجویانه «منطقه پرواز ممنوع»، روایتگر داستان ۳ نوجوان است که در حین آماده‌ شدن برای مسابقه ساخت پهپاد، با پیدا شدن یک یوزپلنگ در حوالی محل زندگیشان، وارد مسائل و درگیری‌های مختلف و مهیجی می‌شوند."}, 
                )
        break;
        case "11":
                res.json(
                {limit:"",trailerUrl:"",imgurl:"https://cinematicket.org/build/images/hezarto/MazeFront.png",rate:"3.5", title:"هزارتو", genre:"", duration:"", director:"امیرحسین ترابی", producer:"سپهر سیفی", year:"", actors:"شهاب حسینی، ساره بیات، غزاله نظر، پژمان جمشیدی، فریبا جدیکار، علیرضا ثانی فر، مریم معصومی، شیرین یزدان بخش، مهسا باقری", others:"نویسنده: طلا معتضدی، مجری‌طرح و مدیرتولید: حسین اکبری، تدوین: سپیده عبدالوهاب، مدیر صدابرداری: داریوش صادقپور، طراح صحنه: حجت اشتری، صداگذاری: علیرضا علویان، طراح گریم: سیدجلال موسوی، طراح لباس: ندا نصر، دستیار اول کارگردان و برنامه‌ریز: حسین فلاح، جلوه‌های بصری: وحید قطبی‌زاده، جلوه‌های ویژه میدانی: آرش آقابیگ، جانشین‌تولید و مدیر تدارکات: امیر یمینی، منشی صحنه: ماریا میرنژاد، دستیار اول فیلمبردار: مجتبی شادرو، گروه فیلمبرداری: مسعود عباسی، محمد نصیری، حسن رحیمی، محمد بختیاری، مهدی علیزاده، گروه صحنه: رامین کرد علی‌وند، مسعود حاجی‌عباسی، گروه صدا: اشکان مزین‌پور، علی سلطانی، گروه چهره پردازی: مونا جعفری، سعید دهقانی",Summary:"زندگی یه هزارتوی پیچیده‌اس، همه آدما دنبال راهی برای فرار هستند اما فقط یه مسیر خروج وجود داره و تا موقعی که به مرکزش نَرسی متوجه‌اش نمی‌شی!"}, 
                )
        break;
        case "12":
                res.json(
                {limit:"12",trailerUrl:"",imgurl:"https://cinematicket.org/build/images/maskharebaz/Characters.jpg",rate:"3.4", title:"مسخره باز", genre:"", duration:"", director:"همایون غنی زاده", producer:"علی مصفا", year:"", actors:"صابر ابر، بابک حمیدیان، هدیه تهرانی، رضا کیانیان، داريوش موفق، محسن حسيني، باحضور علی نصیریان", others:"سرمایه‌گذار: مهدی کرمی، مدیر فیلمبرداری: علی قاضی، صدابردار: محمود کاشانی، طراح گریم: ایمان امیدواری، ‌طراح صحنه: سهیل دانش، ‌طراح لباس: الهام معین، مدیر تدارکات: جواد راهزانی، منشی صحنه: نفیسه ذاکری، عکاس: مسعود اشتری، ‌تدوین: هایده صفی یاری، موسیقی: محمدرضا غنی زاده، دستیار ویژه کارگردان: نازنین گودرزی، مسئول مالی: محمدجواد جابری",Summary:"مسخره‌باز داستان جوانی (صابر ابر) شیفتهٔ بازیگری است که در یک سلمانی به همراه بابک حمیدیان کار می‌کند و شب‌ها بعد از اتمام کار به تمرین بازیگری می‌پردازد. صاحب‌کار او کاظم آقا (علی نصیریان) که فردی معتقد به اصول اخلاقی است سر ماجرایی با سرهنگ کیانی از قدیم‌الایام مشکل داردو ....."}, 
                )
        break;
        case "13":
                res.json(
                {limit:"12",trailerUrl:"",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/DARKHOONGAH--120-x-180---Design-01.jpg",rate:"3.2", title:"درخونگاه", genre:"اجتماعی", duration:"102", director:"سیاوش اسعدی", producer:"منصور سهراب پور", year:"1397", actors:"امين حيايى، ژاله صامتى، مهراوه شريفى نيا ، نادر فلاح ، محمود جعفرى ،منصور شهبازى ،افشين سنگ چاپ ،فاطمه مرتاضى و پانته آپناهى ها", others:"مدير فيلمبردارى: تورج اصلانى و فيلمبرداران: حسن و مهدى اصلانى،مدير برنامه ريزى و دستيار اول كارگردان: عليرضا صالحى، طراح صحنه و لباس: مجيد على اسلام، طراح گريم: آرزو حلاجى، مدير صدابردارى: ناصر انتظارى، مديرتوليد: ناصر ريحان صفت ،جانشين توليد: عباس نصرالله،جلوه هاى ويژه ميدانى : رضا تركمان ،عكاس و فيلمبردار پشت صحنه: مهرداد ناصرى تدوين همزمان:محمدرضا مويينى صداگزارى: عليرضا علويان موسيقى: فرزين قره گوزلو فيلم نوشت: نيما نادرى/ سياوش اسعدى / مشاور پروژه : روزبه معينى",Summary:"ظهری می‌آید، تا بسازد! اگر نبازد..."}, 
                )
        break;
        case "14":
                res.json(
                {limit:"",trailerUrl:"https://www.aparat.com/video/video/embed/videohash/wYZU9/vt/frame",imgurl:"https://cdn.cinematicket.org/images/filmposter/98/jandarposter.jpg",rate:"4.1", title:"جان دار", genre:"اجتماعی - درام", duration:"", director:"حسین امیری دوماری و پدرام پورامیری", producer:"کامران مجیدی", year:"1397", actors:"فاطمه معتمدآریا، حامد بهداد، باران کوثری، مسعود کرامتی، علی شادمان، گیتی قاسمی، محمد علی‌محمدی، امیر احمد قزوینی و جواد عزتی", others:"نویسنده: حسین دوماری، پدرام پورامیری، محمد داودی / مجری طرح: حسین فرضی زاد / مدیر فیلمبرداری: هومن بهمنش / تدوین: بهرام دهقانی / موسیقی: امیر توسلی / طراحی و ترکیب صدا: محمدرضا دلپاک / طراح صحنه و لباس: بابک کریمی طاری / طراح گریم: عباس عباسی / مدیر صدابرداری: طاهر پیشوایی / جلوه‌های ویژه میدانی: آرش آقا بیگ / جلوه‌های ویژه بصری: وحید قطبی زاده / مدیرتولید: احسان وحید / دستیار اول کارگردان و برنامه‌ریز: هانیه بساتینی / منشی صحنه: نائله شریفی / مدیر تدارکات: نادر اژدری / فیلمبردار پشت صحنه: مانی مجیدی / عکاس: اردلان آذرمی",Summary:"وقتی بدترین کار دنیا میشه بهترین راه، چیکار میشه کرد؟"}, 
                )
        break;
    }
})


app.listen(4000)