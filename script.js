let quote= document.querySelector('.quote');
let author= document.querySelector('.author');
let btn= document.querySelector('.btn-next');

let quotes= [
    {quote:'Tell me and I forget Teach me and I remember Involve me and I learn.',
    author:'Benjamin Franklin'        
    },
    {quote:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
     author:'Helen Keller'        
    },
    {quote:'You will face many defeats in life, but never let yourself be defeated.',
    author:'Maya Angelou'        
    },
    {quote:'In the end, its not the years in your life that count. Its the life in your years.',
     author:'Abraham Lincoln'        
    },
    {quote:'Life is a succession of lessons which must be lived to be understood.',
     author:'Ralph Waldo Emerson'        
    },
    {quote:'Only a life lived for others is a life worthwhile.',
     author:'Albert Einstein'        
    },
    {quote:'Life is what happens when youre busy making other plans.',
    author:'John Lennon'        
    },
    {quote:'Go confidently in the direction of your dreams! Live the life youve imagined.',
     author:'Henry David Thoreau'        
    },
    {quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author:'Nelson Mandela'        
    },
    {quote:'Your time is limited, so don"t waste it living someone else"s life. Don"t be trapped by dogma — which is living with the results of other people"s thinking.',
     author:'Steve Jobs'        
    },
    {quote:'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
    author:'Dr. Seuss'        
    },
    {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
     author:'Thomas A. Edison'        
    },
    {quote:"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author:'Barack Obama'        
    },
    {quote:'The way to get started is to quit talking and begin doing.',
    author:'Walt Disney'        
    },
    {quote:"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.'",
     author:'Barack Obama'        
    },
    {quote:'I failed my way to success.',
    author:'Thomas Edison'        
    },
    {quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
     author:'James Cameron'        
    },
    {quote:'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',
     author:'David Brinkley'        
    },
    {quote:'You know you are on the road to success if you would do your job and not be paid for it.',
     author:'Oprah Winfrey'        
    },
    {quote:'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.',
     author:'Thomas J. Watson'        
    },
];
function quotesGenerator(){
    let random= Math.floor(Math.random() * quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
}
btn.addEventListener('click',quotesGenerator);