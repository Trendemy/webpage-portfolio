import author from '~/assets/images/admin.webp';
import dataPower from '~/assets/images/data-power.jpg';
import dataUnlocked from '~/assets/images/data-unlocked.jpg';
import smartAI from '~/assets/images/smart-ai.jpg';
import investing from '~/assets/images/investing-fundamentals.jpg';
import insights from '~/assets/images/insights.jpg';
import crafting from '~/assets/images/crafting.jpg';

const courses = [
    {
        id: 1,
        thumbnail: dataPower,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'Data Power Play',
        number: 10,
        student: 150,
        star: 5.0
    },
    {
        id: 2,
        thumbnail: dataUnlocked,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'Data Queries Unlocked',
        number: 12,
        student: 200,
        star: 4.8
    },
    {
        id: 3,
        thumbnail: smartAI,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'Smart Work with AI',
        number: 15,
        student: 300,
        star: 4.9
    },
    {
        id: 4,
        thumbnail: investing,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'Investing Fundamentals',
        number: 12,
        student: 200,
        star: 5.0
    },
    {
        id: 5,
        thumbnail: insights,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'From Code to Insights',
        number: 12,
        student: 200,
        star: 4.9
    },
    {
        id: 6,
        thumbnail: crafting,
        avatar: author,
        author: 'GV. Lê Hoàng Việt Tuấn',
        lesson: 'Crafting Data Stories',
        number: 12,
        student: 200,
        star: 5.0
    }
];

export default courses;
