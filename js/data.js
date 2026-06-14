const tournaments = [
    {
        id: 'wc-2026',
        name: '2026斯诺克世界锦标赛',
        type: 'snooker',
        status: 'upcoming',
        startDate: '2026-04-18',
        endDate: '2026-05-04',
        location: '英国谢菲尔德克鲁斯堡剧院',
        prize: '£2,300,000',
        champion: '',
        description: '斯诺克界最高荣誉的赛事，每年在英国谢菲尔德克鲁斯堡剧院举行，是斯诺克三大赛事之首。',
        image: 'images/snooker.jpeg',
        schedule: [
            { round: '资格赛', date: '2026-04-08', matches: [
                { player1: '马克·塞尔比', player2: '肖国栋', score1: null, score2: null, time: '10:00' },
                { player1: '约翰·希金斯', player2: '范争一', score1: null, score2: null, time: '14:30' },
                { player1: '尼尔·罗伯逊', player2: '庞俊旭', score1: null, score2: null, time: '19:00' }
            ]},
            { round: '第一轮', date: '2026-04-18', matches: [
                { player1: '罗尼·奥沙利文', player2: '资格赛选手', score1: null, score2: null, time: '10:00' },
                { player1: '卢卡·布雷切尔', player2: '资格赛选手', score1: null, score2: null, time: '14:30' }
            ]},
            { round: '第二轮', date: '2026-04-24', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '1/4决赛', date: '2026-04-28', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '半决赛', date: '2026-05-01', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '决赛', date: '2026-05-04', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '14:00' }
            ]}
        ],
        standings: [
            { rank: 1, player: '罗尼·奥沙利文', played: 0, won: 0, lost: 0, points: 0 },
            { rank: 2, player: '卢卡·布雷切尔', played: 0, won: 0, lost: 0, points: 0 },
            { rank: 3, player: '马克·塞尔比', played: 0, won: 0, lost: 0, points: 0 }
        ],
        news: [
            { id: 1, title: '奥沙利文誓夺第八冠', date: '2026-04-10', summary: '火箭罗尼·奥沙利文表示将全力冲击个人第八座世锦赛冠军奖杯...' },
            { id: 2, title: '中国军团蓄势待发', date: '2026-04-08', summary: '丁俊晖、赵心童等中国选手将参加本届世锦赛资格赛...' },
            { id: 3, title: '克鲁斯堡迎来50周年', date: '2026-04-05', summary: '本届世锦赛是克鲁斯堡剧院举办世锦赛的第50个年头...' }
        ],
        history: [
            { year: '2025', champion: '罗尼·奥沙利文', runnerUp: '凯伦·威尔逊', score: '18-14' },
            { year: '2024', champion: '卢卡·布雷切尔', runnerUp: '马克·塞尔比', score: '18-15' },
            { year: '2023', champion: '卢卡·布雷切尔', runnerUp: '马克·塞尔比', score: '18-15' },
            { year: '2022', champion: '罗尼·奥沙利文', runnerUp: '贾德·特鲁姆普', score: '18-13' },
            { year: '2021', champion: '马克·塞尔比', runnerUp: '肖恩·墨菲', score: '18-15' }
        ]
    },
    {
        id: 'masters-2026',
        name: '2026斯诺克大师赛',
        type: 'snooker',
        status: 'completed',
        startDate: '2026-01-11',
        endDate: '2026-01-18',
        location: '英国伦敦亚历山大宫',
        prize: '£725,000',
        champion: '罗尼·奥沙利文',
        description: '斯诺克三大赛事之一，邀请世界排名前16的选手参赛，是斯诺克界最负盛名的邀请赛。',
        image: 'images/snooker.jpeg',
        schedule: [
            { round: '1/4决赛', date: '2026-01-14', matches: [
                { player1: '罗尼·奥沙利文', player2: '马克·塞尔比', score1: 6, score2: 4, time: '13:00' },
                { player1: '贾德·特鲁姆普', player2: '尼尔·罗伯逊', score1: 6, score2: 5, time: '19:00' }
            ]},
            { round: '半决赛', date: '2026-01-17', matches: [
                { player1: '罗尼·奥沙利文', player2: '贾德·特鲁姆普', score1: 6, score2: 3, time: '13:00' },
                { player1: '肖恩·墨菲', player2: '凯伦·威尔逊', score1: 6, score2: 5, time: '19:00' }
            ]},
            { round: '决赛', date: '2026-01-18', matches: [
                { player1: '罗尼·奥沙利文', player2: '肖恩·墨菲', score1: 10, score2: 7, time: '14:00' }
            ]}
        ],
        standings: [
            { rank: 1, player: '罗尼·奥沙利文', played: 5, won: 5, lost: 0, points: 250000 },
            { rank: 2, player: '肖恩·墨菲', played: 5, won: 4, lost: 1, points: 125000 },
            { rank: 3, player: '贾德·特鲁姆普', played: 4, won: 3, lost: 1, points: 60000 },
            { rank: 4, player: '凯伦·威尔逊', played: 4, won: 3, lost: 1, points: 60000 }
        ],
        news: [
            { id: 1, title: '奥沙利文第八次封王大师赛', date: '2026-01-18', summary: '火箭以10-7战胜肖恩·墨菲，第八次夺得大师赛冠军...' },
            { id: 2, title: '墨菲黑马之旅止步决赛', date: '2026-01-18', summary: '魔术师墨菲本届赛事表现出色，但决赛惜败...' }
        ],
        history: [
            { year: '2025', champion: '罗尼·奥沙利文', runnerUp: '阿里·卡特', score: '10-7' },
            { year: '2024', champion: '罗尼·奥沙利文', runnerUp: '阿里·卡特', score: '10-7' },
            { year: '2023', champion: '贾德·特鲁姆普', runnerUp: '马克·威廉姆斯', score: '10-8' },
            { year: '2022', champion: '尼尔·罗伯逊', runnerUp: '巴里·霍金斯', score: '10-4' }
        ]
    },
    {
        id: 'uk-2025',
        name: '2025斯诺克英国锦标赛',
        type: 'snooker',
        status: 'completed',
        startDate: '2025-11-22',
        endDate: '2025-12-07',
        location: '英国约克巴比肯中心',
        prize: '£1,205,000',
        champion: '丁俊晖',
        description: '斯诺克三大赛事之一，是历史最悠久的斯诺克排名赛事，每年在英国约克举行。',
        image: 'images/snooker.jpeg',
        schedule: [
            { round: '1/4决赛', date: '2025-12-03', matches: [
                { player1: '丁俊晖', player2: '马克·塞尔比', score1: 6, score2: 5, time: '13:00' },
                { player1: '罗尼·奥沙利文', player2: '贾德·特鲁姆普', score1: 6, score2: 4, time: '19:00' }
            ]},
            { round: '半决赛', date: '2025-12-06', matches: [
                { player1: '丁俊晖', player2: '罗尼·奥沙利文', score1: 6, score2: 5, time: '13:00' }
            ]},
            { round: '决赛', date: '2025-12-07', matches: [
                { player1: '丁俊晖', player2: '张安达', score1: 10, score2: 7, time: '14:00' }
            ]}
        ],
        standings: [
            { rank: 1, player: '丁俊晖', played: 7, won: 7, lost: 0, points: 250000 },
            { rank: 2, player: '张安达', played: 7, won: 6, lost: 1, points: 125000 },
            { rank: 3, player: '罗尼·奥沙利文', played: 6, won: 5, lost: 1, points: 60000 }
        ],
        news: [
            { id: 1, title: '丁俊晖英锦赛再度夺冠', date: '2025-12-07', summary: '中国龙丁俊晖时隔多年再度夺得英锦赛冠军...' },
            { id: 2, title: '中国选手会师决赛', date: '2025-12-06', summary: '丁俊晖与张安达双双晋级决赛，创造历史...' }
        ],
        history: [
            { year: '2024', champion: '罗尼·奥沙利文', runnerUp: '丁俊晖', score: '10-7' },
            { year: '2023', champion: '罗尼·奥沙利文', runnerUp: '丁俊晖', score: '10-7' },
            { year: '2022', champion: '马克·艾伦', runnerUp: '丁俊晖', score: '10-7' }
        ]
    },
    {
        id: '9ball-wc-2026',
        name: '2026花式九球世界锦标赛',
        type: '9ball',
        status: 'ongoing',
        startDate: '2026-06-10',
        endDate: '2026-06-20',
        location: '卡塔尔多哈',
        prize: '$250,000',
        champion: '',
        description: '花式九球项目的最高级别赛事，汇集世界各地顶尖九球选手。',
        image: 'images/9-ball.jpeg',
        schedule: [
            { round: '小组赛', date: '2026-06-10', matches: [
                { player1: '潘晓婷', player2: '金佳映', score1: 9, score2: 7, time: '10:00' },
                { player1: '付小芳', player2: '陈思明', score1: 9, score2: 8, time: '14:00' }
            ]},
            { round: '1/8决赛', date: '2026-06-15', matches: [
                { player1: '潘晓婷', player2: '待定', score1: null, score2: null, time: '10:00' },
                { player1: '付小芳', player2: '待定', score1: null, score2: null, time: '14:00' }
            ]},
            { round: '1/4决赛', date: '2026-06-18', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '半决赛', date: '2026-06-19', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '决赛', date: '2026-06-20', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '14:00' }
            ]}
        ],
        standings: [
            { rank: 1, player: '潘晓婷', played: 3, won: 3, lost: 0, points: 9 },
            { rank: 2, player: '金佳映', played: 3, won: 2, lost: 1, points: 6 },
            { rank: 3, player: '付小芳', played: 3, won: 2, lost: 1, points: 6 },
            { rank: 4, player: '陈思明', played: 3, won: 1, lost: 2, points: 3 }
        ],
        news: [
            { id: 1, title: '潘晓婷小组赛三连胜', date: '2026-06-12', summary: '九球天后潘晓婷以小组第一身份晋级淘汰赛...' },
            { id: 2, title: '中国队整体表现出色', date: '2026-06-11', summary: '中国选手在本届比赛中展现出强大实力...' }
        ],
        history: [
            { year: '2025', champion: '潘晓婷', runnerUp: '金佳映', score: '13-11' },
            { year: '2024', champion: 'Kelly Fisher', runnerUp: '潘晓婷', score: '13-12' },
            { year: '2023', champion: '潘晓婷', runnerUp: 'Kelly Fisher', score: '13-10' }
        ]
    },
    {
        id: 'china-open-2026',
        name: '2026中式八球国际公开赛',
        type: '8ball',
        status: 'upcoming',
        startDate: '2026-08-15',
        endDate: '2026-08-25',
        location: '中国秦皇岛',
        prize: '¥3,000,000',
        champion: '',
        description: '中式八球项目的顶级赛事，奖金丰厚，吸引国内外众多高手参赛。',
        image: 'images/8-ball.jpeg',
        schedule: [
            { round: '资格赛', date: '2026-08-10', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '正赛第一轮', date: '2026-08-15', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '决赛', date: '2026-08-25', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '14:00' }
            ]}
        ],
        standings: [],
        news: [
            { id: 1, title: '总奖金再创新高', date: '2026-05-20', summary: '本届中式八球国际公开赛总奖金达到300万人民币...' }
        ],
        history: [
            { year: '2025', champion: '郑宇伯', runnerUp: '杨帆', score: '21-18' },
            { year: '2024', champion: '郑宇伯', runnerUp: '张堃鹏', score: '21-15' },
            { year: '2023', champion: '杨帆', runnerUp: '郑宇伯', score: '21-20' }
        ]
    },
    {
        id: 'shanghai-masters-2026',
        name: '2026上海斯诺克大师赛',
        type: 'snooker',
        status: 'upcoming',
        startDate: '2026-09-08',
        endDate: '2026-09-14',
        location: '中国上海',
        prize: '£825,000',
        champion: '',
        description: '亚洲最具影响力的斯诺克邀请赛，世界前16与中国外卡选手同场竞技。',
        image: 'images/snooker.jpeg',
        schedule: [
            { round: '第一轮', date: '2026-09-08', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '10:00' }
            ]},
            { round: '决赛', date: '2026-09-14', matches: [
                { player1: '待定', player2: '待定', score1: null, score2: null, time: '14:00' }
            ]}
        ],
        standings: [],
        news: [
            { id: 1, title: '上海大师赛九月开杆', date: '2026-06-01', summary: '2026上海斯诺克大师赛将于九月在上海举行...' }
        ],
        history: [
            { year: '2025', champion: '罗尼·奥沙利文', runnerUp: '卢卡·布雷切尔', score: '11-9' },
            { year: '2024', champion: '罗尼·奥沙利文', runnerUp: '贾德·特鲁姆普', score: '11-9' },
            { year: '2023', champion: '罗尼·奥沙利文', runnerUp: '卢卡·布雷切尔', score: '11-9' }
        ]
    }
];

const players = [
    {
        id: 'ronnie-osullivan',
        name: '罗尼·奥沙利文',
        nameEn: 'Ronnie O\'Sullivan',
        nickname: '火箭',
        type: 'snooker',
        country: '英格兰',
        birthDate: '1975-12-05',
        ranking: 1,
        image: 'images/Ronnie.jpeg',
        description: '史上最具天赋的斯诺克选手，以惊人的出杆速度和左右开弓能力闻名。',
        careerHighlights: [
            '7次斯诺克世界锦标赛冠军',
            '8次斯诺克大师赛冠军',
            '8次斯诺克英国锦标赛冠军',
            '世界第一在位时间最长',
            '官方记录最快147分（5分20秒）',
            '单杆破百次数最多选手'
        ],
        recentMatches: [
            { tournament: '2026大师赛', opponent: '肖恩·墨菲', result: '胜', score: '10-7', date: '2026-01-18' },
            { tournament: '2026大师赛', opponent: '贾德·特鲁姆普', result: '胜', score: '6-3', date: '2026-01-17' },
            { tournament: '2025英锦赛', opponent: '丁俊晖', result: '负', score: '5-6', date: '2025-12-06' }
        ],
        totalWinnings: '£12,500,000'
    },
    {
        id: 'stephen-hendry',
        name: '史蒂芬·亨德利',
        nameEn: 'Stephen Hendry',
        nickname: '台球皇帝',
        type: 'snooker',
        country: '苏格兰',
        birthDate: '1969-01-13',
        ranking: null,
        image: 'images/Stephen.jpeg',
        description: '90年代斯诺克球坛统治者，世锦赛7冠王。',
        careerHighlights: [
            '7次斯诺克世界锦标赛冠军',
            '6次斯诺克大师赛冠军',
            '5次斯诺克英国锦标赛冠军',
            '最年轻的世锦赛冠军（21岁）',
            '连续8年世界第一'
        ],
        recentMatches: [
            { tournament: '元老世锦赛', opponent: '史蒂夫·戴维斯', result: '胜', score: '4-2', date: '2025-05-10' }
        ],
        totalWinnings: '£8,500,000'
    },
    {
        id: 'ding-junhui',
        name: '丁俊晖',
        nameEn: 'Ding Junhui',
        nickname: '中国龙',
        type: 'snooker',
        country: '中国',
        birthDate: '1987-04-01',
        ranking: 8,
        image: 'images/Ding.jpeg',
        description: '中国斯诺克领军人物，首位登上世界第一的亚洲斯诺克选手。',
        careerHighlights: [
            '1次斯诺克英国锦标赛冠军',
            '1次斯诺克大师赛冠军',
            '首位登上世界第一的亚洲选手',
            '14个排名赛冠军',
            '单杆147分7次'
        ],
        recentMatches: [
            { tournament: '2025英锦赛', opponent: '张安达', result: '胜', score: '10-7', date: '2025-12-07' },
            { tournament: '2025英锦赛', opponent: '罗尼·奥沙利文', result: '胜', score: '6-5', date: '2025-12-06' },
            { tournament: '2026大师赛', opponent: '尼尔·罗伯逊', result: '负', score: '4-6', date: '2026-01-12' }
        ],
        totalWinnings: '£4,200,000'
    },
    {
        id: 'pan-xiaoting',
        name: '潘晓婷',
        nameEn: 'Pan Xiaoting',
        nickname: '九球天后',
        type: '9ball',
        country: '中国',
        birthDate: '1982-02-25',
        ranking: 3,
        image: 'images/Pan.jpeg',
        description: '中国第一位获得世界锦标赛冠军的台球选手。',
        careerHighlights: [
            '3次花式九球世界锦标赛冠军',
            '中国首位台球世界冠军',
            '女子九球世界排名第一',
            '亚运会金牌得主'
        ],
        recentMatches: [
            { tournament: '2026九球世锦赛', opponent: '金佳映', result: '胜', score: '9-7', date: '2026-06-10' }
        ],
        totalWinnings: '$2,800,000'
    },
    {
        id: 'allison-fisher',
        name: '艾莉森·费雪',
        nameEn: 'Allison Fisher',
        nickname: '毁灭女公爵',
        type: '9ball',
        country: '英国',
        birthDate: '1968-02-24',
        ranking: null,
        image: 'images/Allison.jpeg',
        description: '女子台球界传奇人物，横跨斯诺克与九球两项运动。',
        careerHighlights: [
            '7次世界女子斯诺克锦标赛冠军',
            '4次世界女子九球锦标赛冠军',
            '女子台球历史上最伟大的选手之一'
        ],
        recentMatches: [],
        totalWinnings: '$3,500,000'
    },
    {
        id: 'judd-trump',
        name: '贾德·特鲁姆普',
        nameEn: 'Judd Trump',
        nickname: '准神',
        type: 'snooker',
        country: '英格兰',
        birthDate: '1989-08-20',
        ranking: 2,
        image: 'images/snooker.jpeg',
        description: '以准度著称的斯诺克选手，进攻型打法代表人物。',
        careerHighlights: [
            '1次斯诺克世界锦标赛冠军',
            '1次斯诺克大师赛冠军',
            '1次斯诺克英国锦标赛冠军',
            '29个排名赛冠军',
            '单杆147分8次'
        ],
        recentMatches: [
            { tournament: '2026大师赛', opponent: '罗尼·奥沙利文', result: '负', score: '3-6', date: '2026-01-17' }
        ],
        totalWinnings: '£6,800,000'
    },
    {
        id: 'mark-selby',
        name: '马克·塞尔比',
        nameEn: 'Mark Selby',
        nickname: '莱斯特小丑',
        type: 'snooker',
        country: '英格兰',
        birthDate: '1983-06-19',
        ranking: 5,
        image: 'images/snooker.jpeg',
        description: '以坚韧防守和强大心理素质著称的斯诺克选手。',
        careerHighlights: [
            '4次斯诺克世界锦标赛冠军',
            '3次斯诺克大师赛冠军',
            '2次斯诺克英国锦标赛冠军',
            '9个三大赛冠军',
            '22个排名赛冠军'
        ],
        recentMatches: [
            { tournament: '2026大师赛', opponent: '罗尼·奥沙利文', result: '负', score: '4-6', date: '2026-01-15' }
        ],
        totalWinnings: '£7,200,000'
    },
    {
        id: 'zhao-xintong',
        name: '赵心童',
        nameEn: 'Zhao Xintong',
        nickname: '赵公子',
        type: 'snooker',
        country: '中国',
        birthDate: '1997-04-03',
        ranking: 12,
        image: 'images/snooker.jpeg',
        description: '中国斯诺克新生代代表，进攻打法流畅华丽。',
        careerHighlights: [
            '1次斯诺克英国锦标赛冠军',
            '1次德国大师赛冠军',
            '单杆147分2次',
            '最有天赋的年轻选手之一'
        ],
        recentMatches: [],
        totalWinnings: '£1,500,000'
    },
    {
        id: 'chen-siming',
        name: '陈思明',
        nameEn: 'Chen Siming',
        nickname: '',
        type: '9ball',
        country: '中国',
        birthDate: '1993-12-30',
        ranking: 5,
        image: 'images/9-ball.jpeg',
        description: '中国女子九球顶尖选手，世锦赛冠军。',
        careerHighlights: [
            '1次世界女子九球锦标赛冠军',
            '世界排名第一',
            '多项国际赛事冠军'
        ],
        recentMatches: [
            { tournament: '2026九球世锦赛', opponent: '付小芳', result: '负', score: '8-9', date: '2026-06-10' }
        ],
        totalWinnings: '$1,800,000'
    },
    {
        id: 'zheng-yubo',
        name: '郑宇伯',
        nameEn: 'Zheng Yubo',
        nickname: '二宝',
        type: '8ball',
        country: '中国',
        birthDate: '1993-01-01',
        ranking: 1,
        image: 'images/8-ball.jpeg',
        description: '中式八球领军人物，多次获得全国冠军。',
        careerHighlights: [
            '2次中式八球国际公开赛冠军',
            '中式八球世界排名第一',
            '被誉为中式八球第一人'
        ],
        recentMatches: [],
        totalWinnings: '¥5,000,000'
    }
];

function getTournaments() {
    return tournaments;
}

function getTournamentById(id) {
    return tournaments.find(t => t.id === id);
}

function getPlayers() {
    return players;
}

function getPlayerById(id) {
    return players.find(p => p.id === id);
}

function getTournamentTypes() {
    return [
        { value: 'all', label: '全部项目' },
        { value: 'snooker', label: '斯诺克' },
        { value: '9ball', label: '花式九球' },
        { value: '8ball', label: '中式八球' }
    ];
}

function getTournamentStatuses() {
    return [
        { value: 'all', label: '全部状态' },
        { value: 'upcoming', label: '即将开始' },
        { value: 'ongoing', label: '进行中' },
        { value: 'completed', label: '已结束' }
    ];
}

function getPlayerTypes() {
    return [
        { value: 'all', label: '全部项目' },
        { value: 'snooker', label: '斯诺克' },
        { value: '9ball', label: '花式九球' },
        { value: '8ball', label: '中式八球' }
    ];
}

function getStatusText(status) {
    const statusMap = {
        upcoming: '即将开始',
        ongoing: '进行中',
        completed: '已结束'
    };
    return statusMap[status] || status;
}

function getTypeText(type) {
    const typeMap = {
        snooker: '斯诺克',
        '9ball': '花式九球',
        '8ball': '中式八球'
    };
    return typeMap[type] || type;
}

function getStatusClass(status) {
    const classMap = {
        upcoming: 'status-upcoming',
        ongoing: 'status-ongoing',
        completed: 'status-completed'
    };
    return classMap[status] || '';
}
