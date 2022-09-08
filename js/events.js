const eventlist = [
    {
        d: 'day1',
        img: 'img/vr.jpg',
        event: 'event1',
        desc: 'description1'
    },
    {
        d: 'day1',
        img: 'img/vr.jpg',
        event: 'event1',
        desc: 'description1'
    }, {
        d: 'day2',
        img: 'img/vr.jpg',
        event: 'event1',
        desc: 'description1'
    }, {
        d: 'day2',
        img: 'img/vr.jpg',
        event: 'event1',
        desc: 'description1'
    }, {
        d: 'day3',
        img: 'img/vr.jpg',
        event: 'event1',
        desc: 'description1'
    }, {
        'd': 'day3',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day4',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day4',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day5',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day6',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day6',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day7',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    }, {
        'd': 'day7',
        'img': 'img/vr.jpg',
        'event': 'event1',
        'desc': 'description1'
    },
]
const eventHolder1 = document.getElementById('eventHolder1');
const eventHolder2 = document.getElementById('eventHolder2');
const eventHolder3 = document.getElementById('eventHolder3');
const eventHolder4 = document.getElementById('eventHolder4');
const eventHolder5 = document.getElementById('eventHolder5');
const eventHolder6 = document.getElementById('eventHolder6');
const eventHolder7 = document.getElementById('eventHolder7');


function dayEvent(d) {
    if (d === 'day1') {
       eventHolder1.style.display='block';
       eventHolder2.style.display='none';
       eventHolder3.style.display='none';
       eventHolder4.style.display='none';
       eventHolder5.style.display='none';
       eventHolder6.style.display='none';
       eventHolder7.style.display='none';


    }
    if (d === 'day2') {
        eventHolder1.style.display='none';
       eventHolder2.style.display='block';
       eventHolder3.style.display='none';
       eventHolder4.style.display='none';
       eventHolder5.style.display='none';
       eventHolder6.style.display='none';
       eventHolder7.style.display='none';
    }
    if (d === 'day3') {
       eventHolder1.style.display='none';
       eventHolder2.style.display='none';
       eventHolder3.style.display='block';
       eventHolder4.style.display='none';
       eventHolder5.style.display='none';
       eventHolder6.style.display='none';
       eventHolder7.style.display='none';
    }
    if (d === 'day4') {
        eventHolder1.style.display='none';
       eventHolder2.style.display='none';
       eventHolder3.style.display='none';
       eventHolder4.style.display='block';
       eventHolder5.style.display='none';
       eventHolder6.style.display='none';
       eventHolder7.style.display='none';
    }
    if (d === 'day5') {
       eventHolder1.style.display='none';
       eventHolder2.style.display='none';
       eventHolder3.style.display='none';
       eventHolder4.style.display='none';
       eventHolder5.style.display='block';
       eventHolder6.style.display='none';
       eventHolder7.style.display='none';
    }
    if (d === 'day6') {
         eventHolder1.style.display='none';
       eventHolder2.style.display='none';
       eventHolder3.style.display='none';
       eventHolder4.style.display='none';
       eventHolder5.style.display='none';
       eventHolder6.style.display='block';
       eventHolder7.style.display='none';
    }
    if (d === 'day7') {
        eventHolder1.style.display='none';
       eventHolder2.style.display='none';
       eventHolder3.style.display='none';
       eventHolder4.style.display='none';
       eventHolder5.style.display='none';
       eventHolder6.style.display='none';
       eventHolder7.style.display='block';
    }
}


