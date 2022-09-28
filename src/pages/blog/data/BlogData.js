/**
 * Data before done API
 */
import {ConstantImages} from "../../../base";
import {content_1_en} from "./id_1/content_1_en";
import {content_1_ru} from "./id_1/content_1_ru";
import {description_1_en} from "./id_1/description_1_en";
import {description_1_ru} from "./id_1/description_1_ru";
import {description_2_en} from "./id_2/description_2_en";
import {description_2_ru} from "./id_2/description_2_ru";
import {content_2_en} from "./id_2/content_2_en";
import {content_2_ru} from "./id_2/content_2_ru";
import {description_3_en} from "./id_3/description_3_en";
import {description_3_ru} from "./id_3/description_3_ru";
import {content_3_en} from "./id_3/content_3_en";
import {content_3_ru} from "./id_3/content_3_ru";

export const BlogData = [
    {
        id: 1,
        title: 'How to learn words without pain to remember them',
        titleRu: 'Как выучить слова без боли, чтобы запомнить их',
        description: description_1_en,
        descriptionRu: description_1_ru,
        content: content_1_en,
        contentRu: content_1_ru,
        // common
        image: ConstantImages.home.post1,
        createAt: 1632818112000,
        topics: ['words', 'articles', 'blog'],
        type: 'article'
    },
    {
        id: 2,
        title: 'How to sleep in class without students noticing',
        titleRu: 'Как спать в классе так, чтобы ученики не заметили',
        description: description_2_en,
        descriptionRu: description_2_ru,
        content: content_2_en,
        contentRu: content_2_ru,
        // common
        image: ConstantImages.home.post2,
        createAt: 1664354120000,
        topics: ['words', 'articles', 'blog'],
        type: 'article'
    },
    {
        id: 3,
        title: 'A teaching untrained students with the super method',
        titleRu: 'Обучение неподготовленных студентов суперметодом',
        description: description_3_en,
        descriptionRu: description_3_ru,
        content: content_3_en,
        contentRu: content_3_ru,
        // common
        image: ConstantImages.home.post3,
        createAt: 1609144512000,
        topics: ['words', 'articles', 'blog', 'words1', 'articles2', 'blog3'],
        type: 'review'
    }
];