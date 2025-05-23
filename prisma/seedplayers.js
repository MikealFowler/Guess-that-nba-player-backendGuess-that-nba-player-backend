const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();



const players = [
    {
        player_name: 'LeBron James',
        points_avg: 27.0,
        rebounds_avg: 7.4,
        assists_avg: 7.4,
        steals_avg: 1.6,
        blocks_avg: 0.8,
        finals_played: 10,
        finals_won: 4,
    },
    {
        player_name: 'Kobe Bryant',
        points_avg: 25.0,
        rebounds_avg: 5.2,
        assists_avg: 4.7,
        steals_avg: 1.4,
        blocks_avg: 0.5,
        finals_played: 7,
        finals_won: 5,
    },
    {
        player_name: 'Magic Johnson',
        points_avg: 19.5,
        rebounds_avg: 7.2,
        assists_avg: 11.2,
        steals_avg: 1.9,
        blocks_avg: 0.4,
        finals_played: 9,
        finals_won: 5,
    },
    {
        player_name: 'Larry Bird',
        points_avg: 24.3,
        rebounds_avg: 10.0,
        assists_avg: 6.3,
        steals_avg: 1.7,
        blocks_avg: 0.8,
        finals_played: 5,
        finals_won: 3,
    },
    {
        player_name: 'Shaquille O\'Neal',
        points_avg: 23.7,
        rebounds_avg: 10.9,
        assists_avg: 2.5,
        steals_avg: 0.6,
        blocks_avg: 2.3,
        finals_played: 6,
        finals_won: 4,
    },
    {
        player_name: 'Tim Duncan',
        points_avg: 19.0,
        rebounds_avg: 10.8,
        assists_avg: 3.0,
        steals_avg: 0.7,
        blocks_avg: 2.2,
        finals_played: 6,
        finals_won: 5,
    },
    {
        player_name: 'Kareem Abdul-Jabbar',
        points_avg: 24.6,
        rebounds_avg: 11.2,
        assists_avg: 3.6,
        steals_avg: 0.9,
        blocks_avg: 2.6,
        finals_played: 10,
        finals_won: 6,
    },
    {
        player_name: 'Hakeem Olajuwon',
        points_avg: 21.8,
        rebounds_avg: 11.1,
        assists_avg: 2.5,
        steals_avg: 1.7,
        blocks_avg: 3.1,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'Stephen Curry',
        points_avg: 24.3,
        rebounds_avg: 4.6,
        assists_avg: 6.5,
        steals_avg: 1.7,
        blocks_avg: 0.2,
        finals_played: 6,
        finals_won: 4,
    },
    {
        player_name: 'Michael Jordan',
        points_avg: 30.1,
        rebounds_avg: 6.2,
        assists_avg: 5.3,
        steals_avg: 2.3,
        blocks_avg: 0.8,
        finals_played: 6,
        finals_won: 6,
    },
    {
        player_name: 'Ray Allen',
        points_avg: 18.9,
        rebounds_avg: 4.1,
        assists_avg: 3.4,
        steals_avg: 1.1,
        blocks_avg: 0.2,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'Giannis Antetokounmpo',
        points_avg: 21.8,
        rebounds_avg: 9.4,
        assists_avg: 4.6,
        steals_avg: 1.2,
        blocks_avg: 1.3,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Carmelo Anthony',
        points_avg: 22.5,
        rebounds_avg: 6.2,
        assists_avg: 2.7,
        steals_avg: 1.0,
        blocks_avg: 0.5,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'Nate Archibald',
        points_avg: 18.8,
        rebounds_avg: 2.3,
        assists_avg: 7.4,
        steals_avg: 1.1,
        blocks_avg: 0.1,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Paul Arizin',
        points_avg: 22.8,
        rebounds_avg: 8.6,
        assists_avg: 2.3,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Charles Barkley',
        points_avg: 22.1,
        rebounds_avg: 11.7,
        assists_avg: 3.9,
        steals_avg: 1.5,
        blocks_avg: 0.8,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Rick Barry',
        points_avg: 23.2,
        rebounds_avg: 6.5,
        assists_avg: 5.1,
        steals_avg: 2.0,
        blocks_avg: 0.5,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Elgin Baylor',
        points_avg: 27.4,
        rebounds_avg: 13.5,
        assists_avg: 4.3,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 8,
        finals_won: 0,
    },
    {
        player_name: 'Dave Bing',
        points_avg: 20.3,
        rebounds_avg: 3.8,
        assists_avg: 6.0,
        steals_avg: 1.3,
        blocks_avg: 0.1,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'Wilt Chamberlain',
        points_avg: 30.1,
        rebounds_avg: 22.9,
        assists_avg: 4.4,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 6,
        finals_won: 2,
    },
    {
        player_name: 'Bob Cousy',
        points_avg: 18.4,
        rebounds_avg: 5.2,
        assists_avg: 7.5,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 7,
        finals_won: 6,
    },
    {
        player_name: 'Dave Cowens',
        points_avg: 17.6,
        rebounds_avg: 13.6,
        assists_avg: 3.8,
        steals_avg: 1.1,
        blocks_avg: 0.9,
        finals_played: 2,
        finals_won: 2,
    },
    {
        player_name: 'Billy Cunningham',
        points_avg: 21.2,
        rebounds_avg: 10.4,
        assists_avg: 4.3,
        steals_avg: 1.8,
        blocks_avg: 0.5,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Anthony Davis',
        points_avg: 24.0,
        rebounds_avg: 10.4,
        assists_avg: 2.4,
        steals_avg: 1.4,
        blocks_avg: 2.3,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Dave DeBusschere',
        points_avg: 16.1,
        rebounds_avg: 11.0,
        assists_avg: 2.9,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 2,
        finals_won: 2,
    },
    {
        player_name: 'Clyde Drexler',
        points_avg: 20.4,
        rebounds_avg: 6.1,
        assists_avg: 5.6,
        steals_avg: 2.0,
        blocks_avg: 0.7,
        finals_played: 3,
        finals_won: 1,
    },
    {
        player_name: 'Allen Iverson',
        points_avg: 26.7,
        rebounds_avg: 3.7,
        assists_avg: 6.2,
        steals_avg: 2.2,
        blocks_avg: 0.2,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Bill Russell',
        points_avg: 15.1,
        rebounds_avg: 22.5,
        assists_avg: 4.3,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 12,
        finals_won: 11,
    },
    {
        player_name: 'Bill Sharman',
        points_avg: 17.8,
        rebounds_avg: 3.9,
        assists_avg: 3.0,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 5,
        finals_won: 4,
    },
    {
        player_name: 'Bill Walton',
        points_avg: 13.3,
        rebounds_avg: 10.5,
        assists_avg: 3.4,
        steals_avg: 0.9,
        blocks_avg: 2.2,
        finals_played: 2,
        finals_won: 2,
    },
    {
        player_name: 'Bob McAdoo',
        points_avg: 22.1,
        rebounds_avg: 9.4,
        assists_avg: 2.3,
        steals_avg: 1.0,
        blocks_avg: 1.5,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'Bob Pettit',
        points_avg: 26.4,
        rebounds_avg: 16.2,
        assists_avg: 3.0,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Chris Paul',
        points_avg: 17.5,
        rebounds_avg: 4.5,
        assists_avg: 9.4,
        steals_avg: 2.1,
        blocks_avg: 0.1,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Damian Lillard',
        points_avg: 25.2,
        rebounds_avg: 4.2,
        assists_avg: 6.7,
        steals_avg: 1.0,
        blocks_avg: 0.3,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'David Robinson',
        points_avg: 21.1,
        rebounds_avg: 10.6,
        assists_avg: 2.5,
        steals_avg: 1.4,
        blocks_avg: 3.0,
        finals_played: 2,
        finals_won: 2,
    },
    {
        player_name: 'Dennis Rodman',
        points_avg: 7.3,
        rebounds_avg: 13.1,
        assists_avg: 1.8,
        steals_avg: 0.7,
        blocks_avg: 0.6,
        finals_played: 6,
        finals_won: 5,
    }, {
        player_name: 'Dirk Nowitzki',
        points_avg: 20.7,
        rebounds_avg: 7.5,
        assists_avg: 2.4,
        steals_avg: 0.8,
        blocks_avg: 0.8,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Dolph Schayes',
        points_avg: 18.5,
        rebounds_avg: 12.1,
        assists_avg: 3.1,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Dominique Wilkins',
        points_avg: 24.8,
        rebounds_avg: 6.7,
        assists_avg: 2.5,
        steals_avg: 1.3,
        blocks_avg: 0.6,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'Dwyane Wade',
        points_avg: 22.0,
        rebounds_avg: 4.7,
        assists_avg: 5.4,
        steals_avg: 1.5,
        blocks_avg: 0.8,
        finals_played: 5,
        finals_won: 3,
    },
    {
        player_name: 'Earl Monroe',
        points_avg: 18.8,
        rebounds_avg: 3.0,
        assists_avg: 3.9,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 1,
        finals_won: 1,
    },
    {
        player_name: 'Elvin Hayes',
        points_avg: 21.0,
        rebounds_avg: 12.5,
        assists_avg: 1.8,
        steals_avg: 1.0,
        blocks_avg: 2.0,
        finals_played: 3,
        finals_won: 1,
    },
    {
        player_name: 'Gary Payton',
        points_avg: 16.3,
        rebounds_avg: 3.9,
        assists_avg: 6.7,
        steals_avg: 1.8,
        blocks_avg: 0.2,
        finals_played: 3,
        finals_won: 1,
    },
    {
        player_name: 'George Gervin',
        points_avg: 25.1,
        rebounds_avg: 5.3,
        assists_avg: 2.6,
        steals_avg: 1.2,
        blocks_avg: 0.8,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'George Mikan',
        points_avg: 23.1,
        rebounds_avg: 13.4,
        assists_avg: 2.8,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 7,
        finals_won: 5,
    },
    {
        player_name: 'Hal Greer',
        points_avg: 19.2,
        rebounds_avg: 5.0,
        assists_avg: 4.0,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 3,
        finals_won: 1,
    }, {
        player_name: 'Isiah Thomas',
        points_avg: 19.2,
        rebounds_avg: 3.6,
        assists_avg: 9.3,
        steals_avg: 1.9,
        blocks_avg: 0.3,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'James Harden',
        points_avg: 24.1,
        rebounds_avg: 5.6,
        assists_avg: 7.1,
        steals_avg: 1.5,
        blocks_avg: 0.5,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'James Worthy',
        points_avg: 17.6,
        rebounds_avg: 5.1,
        assists_avg: 3.0,
        steals_avg: 1.1,
        blocks_avg: 0.7,
        finals_played: 9,
        finals_won: 3,
    },
    {
        player_name: 'Jason Kidd',
        points_avg: 12.6,
        rebounds_avg: 6.3,
        assists_avg: 8.7,
        steals_avg: 1.9,
        blocks_avg: 0.3,
        finals_played: 3,
        finals_won: 1,
    },
    {
        player_name: 'Jerry Lucas',
        points_avg: 17.0,
        rebounds_avg: 15.6,
        assists_avg: 3.3,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Jerry West',
        points_avg: 27.0,
        rebounds_avg: 5.8,
        assists_avg: 6.7,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 9,
        finals_won: 1,
    },
    {
        player_name: 'John Havlicek',
        points_avg: 20.8,
        rebounds_avg: 6.3,
        assists_avg: 4.8,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 8,
        finals_won: 8,
    },
    {
        player_name: 'John Stockton',
        points_avg: 13.1,
        rebounds_avg: 2.7,
        assists_avg: 10.5,
        steals_avg: 2.2,
        blocks_avg: 0.2,
        finals_played: 2,
        finals_won: 0,
    },
    {
        player_name: 'Julius Erving',
        points_avg: 24.2,
        rebounds_avg: 8.5,
        assists_avg: 4.2,
        steals_avg: 2.0,
        blocks_avg: 1.7,
        finals_played: 4,
        finals_won: 1,
    },
    {
        player_name: 'Karl Malone',
        points_avg: 25.0,
        rebounds_avg: 10.1,
        assists_avg: 3.6,
        steals_avg: 1.4,
        blocks_avg: 0.8,
        finals_played: 3,
        finals_won: 0,
    }, {
        player_name: 'Kawhi Leonard',
        points_avg: 19.6,
        rebounds_avg: 6.4,
        assists_avg: 2.9,
        steals_avg: 1.8,
        blocks_avg: 0.6,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'Kevin Durant',
        points_avg: 27.3,
        rebounds_avg: 7.0,
        assists_avg: 4.4,
        steals_avg: 1.1,
        blocks_avg: 1.1,
        finals_played: 4,
        finals_won: 2,
    },
    {
        player_name: 'Kevin Garnett',
        points_avg: 17.8,
        rebounds_avg: 10.0,
        assists_avg: 3.7,
        steals_avg: 1.3,
        blocks_avg: 1.4,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Kevin McHale',
        points_avg: 17.9,
        rebounds_avg: 7.3,
        assists_avg: 1.7,
        steals_avg: 0.4,
        blocks_avg: 1.7,
        finals_played: 5,
        finals_won: 3,
    },
    {
        player_name: 'Lenny Wilkens',
        points_avg: 16.5,
        rebounds_avg: 4.7,
        assists_avg: 6.7,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Moses Malone',
        points_avg: 20.6,
        rebounds_avg: 12.2,
        assists_avg: 1.4,
        steals_avg: 0.8,
        blocks_avg: 1.3,
        finals_played: 3,
        finals_won: 1,
    },
    {
        player_name: 'Nate Thurmond',
        points_avg: 15.0,
        rebounds_avg: 15.0,
        assists_avg: 2.7,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Oscar Robertson',
        points_avg: 25.7,
        rebounds_avg: 7.5,
        assists_avg: 9.5,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 2,
        finals_won: 1,
    },
    {
        player_name: 'Patrick Ewing',
        points_avg: 21.0,
        rebounds_avg: 9.8,
        assists_avg: 1.9,
        steals_avg: 1.0,
        blocks_avg: 2.4,
        finals_played: 2,
        finals_won: 0,
    },
    {
        player_name: 'Paul Pierce',
        points_avg: 19.7,
        rebounds_avg: 5.6,
        assists_avg: 3.5,
        steals_avg: 1.3,
        blocks_avg: 0.6,
        finals_played: 2,
        finals_won: 1,
    }, {
        player_name: 'Pete Maravich',
        points_avg: 24.2,
        rebounds_avg: 4.2,
        assists_avg: 5.4,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'Reggie Miller',
        points_avg: 18.2,
        rebounds_avg: 3.0,
        assists_avg: 3.0,
        steals_avg: 1.1,
        blocks_avg: 0.2,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Robert Parish',
        points_avg: 14.5,
        rebounds_avg: 9.1,
        assists_avg: 1.4,
        steals_avg: 0.8,
        blocks_avg: 1.5,
        finals_played: 5,
        finals_won: 4,
    },
    {
        player_name: 'Russell Westbrook',
        points_avg: 22.4,
        rebounds_avg: 7.3,
        assists_avg: 8.4,
        steals_avg: 1.6,
        blocks_avg: 0.3,
        finals_played: 1,
        finals_won: 0,
    },
    {
        player_name: 'Sam Jones',
        points_avg: 17.7,
        rebounds_avg: 4.9,
        assists_avg: 2.5,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 11,
        finals_won: 10,
    },
    {
        player_name: 'Scottie Pippen',
        points_avg: 16.1,
        rebounds_avg: 6.4,
        assists_avg: 5.2,
        steals_avg: 2.0,
        blocks_avg: 0.8,
        finals_played: 6,
        finals_won: 6,
    },
    {
        player_name: 'Steve Nash',
        points_avg: 14.3,
        rebounds_avg: 3.0,
        assists_avg: 8.5,
        steals_avg: 0.7,
        blocks_avg: 0.1,
        finals_played: 0,
        finals_won: 0,
    },
    {
        player_name: 'Walt Frazier',
        points_avg: 18.9,
        rebounds_avg: 5.9,
        assists_avg: 6.1,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 3,
        finals_won: 2,
    },
    {
        player_name: 'Wes Unseld',
        points_avg: 10.8,
        rebounds_avg: 14.0,
        assists_avg: 3.9,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 4,
        finals_won: 1,
    },
    {
        player_name: 'Willis Reed',
        points_avg: 18.7,
        rebounds_avg: 12.9,
        assists_avg: 1.8,
        steals_avg: null,
        blocks_avg: null,
        finals_played: 2,
        finals_won: 2,
    },];

async function main() {
    for (const player of players) {
        await prisma.player.create({
            data: player,
        });
    }
    console.log('✅ All players seeded.');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })  