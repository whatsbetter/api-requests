import { getConditions as t } from './_util';

/**
 * Найти все заявки на работу 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function find(params) { 
    return `{
        trainings ${ t(params) }  {
            id, 
            user {
                id, 
                name
            }, 
            training_course {
                id, 
                name,
                description
            }, 
            status
        }
    }`;
}


export function findStages(params) { 
    return `{
        trainingStages ${ t(params) }  {
            id, 
            stage,
            status,
            score,
            comment
        }
    }`;
}

export function findPrograms(params) { 
    return `{
        trainingPrograms ${ t(params) }  {
            id, 
            stage,
            duration,
            duration_unit,
            sphere {
                id,
                name,
                label
            },
            level,
            section_id,
            section_name
        }
    }`;
}

export function findCourses(params) { 
    return `{
        trainingCourses ${ t(params) }  {
            id, 
            name, 
            description
        }
    }`;
}