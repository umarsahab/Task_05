var quotesArray = ['Only the paranoid survive —Andy Grove' , 
'It’s hard to beat a person who never gives up —Babe Ruth',
'Allama Iqbal-ہزار کتب خانہ ایک طرف اور باپ کی نگاہ ملتفت ایک طرف ',
 'Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.—Joss Whedon', 
 'Everything you can imagine is real.―Pablo Picasso',
 'Allama Iqbal-مومن ریشم کی طرح نرم اور فولادکی طرح سخت ہوتا ہے',
'Whatever you are, be a good one.―Abraham Lincoln',
'زندگی محبت کے بغیر ایسی ہے جیسے وہ پیڑ جس میں پھول ہوں نہ پھل',
'We are here to add what we can to life, not to get what we can from life. -William Osler',
'Life comes from the earth and life returns to the earth.-Zhuangzi',
'If you change the way you look at things, the things you look at change.']


function displayQuotes(){
    var randomnum = Math.random()
    var mulnum = (randomnum * 10) + 1
    var floornum = Math.floor(mulnum)
    document.getElementById('quotes').innerText = quotesArray[floornum]
    
}
var button = document.getElementById('btn')
button.addEventListener('click', displayQuotes)