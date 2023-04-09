const projectGroups = [{
    groupName: 'FYJC',
    parentGroupId: null,
    _id: 1
}, {
    groupName: 'FYJC SCIENCE',
    parentGroupId: 1,
    _id: 2
}, {
    groupName: 'FYJC COMMERCE',
    parentGroupId: 1,
    _id: 3
}]

const projectOptions = [{
    optionName: 'FYJC SCIENCE 2022-23',
    optionKey: 'fyjcScience2022-23',
    optionType: 'single',
    _id: 1
}, {
    optionName: 'Optional Subject',
    optionKey: 'optionalSubject',
    optionType: 'single',
    _id: 2
}, {
    optionName: 'FYJC COMMERCE 2022-23',
    optionKey: 'fyjcCommerce2022-23',
    optionType: 'single',
    _id: 3
}]

const reservationCategories = [{
    categoryName: 'Caste',
    categoryKey: 'caste',
    categoryType: 'single',
    _id: 1
}, {
    categoryName: 'Gender',
    categoryKey: 'gender',
    categoryType: 'single',
    _id: 2
}, {
    categoryName: 'Religion',
    categoryKey: 'religion',
    categoryType: 'single',
    _id: 3
}]

const reservationCategoryValues = [{
    reservationCategoryId: 1,
    valueName: 'SC',
    valueKey: 'sc',
    _id: 1
}, {
    reservationCategoryId: 1,
    valueName: 'ST',
    valueKey: 'st',
    _id: 2
}, {
    reservationCategoryId: 1,
    valueName: 'OBC',
    valueKey: 'obc',
    _id: 3
}, {
    reservationCategoryId: 2,
    valueName: 'Male',
    valueKey: 'male',
    _id: 4
}, {
    reservationCategoryId: 2,
    valueName: 'Female',
    valueKey: 'female',
    _id: 5
}, {
    reservationCategoryId: 2,
    valueName: 'Other',
    valueKey: 'other',
    _id: 6
}, {
    reservationCategoryId: 3,
    valueName: 'Sikh',
    valueKey: 'sikh',
    _id: 7
}];

const projectOptionValues = [{
    projectOptionId: 1,
    valueName: 'FYJC SCIENCE 2022-23',
    valueKey: 'fyjcScience2022-23',
    numberOfseats: 100,
    reservedSeats: [{
        reservationCategoryId: 1,
        reservationCategoryValueId: 1,
        seatPercentage: 15,
        seats: 15,
    }, {
        reservationCategoryId: 1,
        reservationCategoryValueId: 2,
        seatPercentage: 15,
        seats: 15,
    }, {
        reservationCategoryId: 1,
        reservationCategoryValueId: 3,
        seatPercentage: 30,
        seats: 30,
    }, {
        reservationCategoryId: 2,
        reservationCategoryValueId: 4,
        seatPercentage: 60,
        seats: 60,
    }],
    _id: 1
}, {
    projectOptionId: 2,
    valueName: 'Electronics',
    valueKey: 'electronics',
    numberOfseats: 60,
    reservedSeats: [],
    _id: 2
}, {
    projectOptionId: 2,
    valueName: 'Computer Science',
    valueKey: 'computerScience',
    numberOfseats: 140,
    reservedSeats: [],
    _id: 3
}, {
    projectOptionId: 3,
    valueName: 'FYJC COMMERCE 2022-23',
    valueKey: 'fyjcCommerce2022-23',
    numberOfseats: 100,
    reservedSeats: [
        {
            reservationCategoryId: 1,
            reservationCategoryValueId: 1,
            seatPercentage: 15,
            seats: 15,
        }, {
            reservationCategoryId: 1,
            reservationCategoryValueId: 2,
            seatPercentage: 15,
            seats: 15,
        }, {
            reservationCategoryId: 1,
            reservationCategoryValueId: 3,
            seatPercentage: 30,
            seats: 30,
        }, {
            reservationCategoryId: 2,
            reservationCategoryValueId: 4,
            seatPercentage: 60,
            seats: 60,
        }
    ],
    _id: 4
}]

const projects = [{
    projectName: 'FYJC SCIENCE 2022-23',
    projectGroupId: 2,
    startDate: '2022-06-01',
    endDate: '2022-07-01',
    mainProjectOptionId: 1,
    optionalProjectOptions: [2],
    workflow: [{}, {}],
    targetSeats: 100,
    targetFeeCollection: 100000,
    _id: 1,
}, {
    projectName: 'FYJC COMMERCE 2022-23',
    projectGroupId: 3,
    startDate: '2022-06-01',
    endDate: '2022-07-01',
    mainProjectOptionId: 3,
    optionalProjectOptions: [2],
    workflow: [{}, {}],
    targetSeats: 100,
    targetFeeCollection: 100000,
    _id: 1,
}]

/*
 * LIST OF APIS :
 * RESERVATION CATEGORY APIS
 * 1. POST /api/reservationCategories
 *   body : {
 *     categoryName: 'Caste', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     categoryKey: 'caste', // required, string, unique, max 50 characters, min 2 characters, no special characters, no spaces
 *     categoryType: 'single', // required, string, enum ['single', 'multiple']
 *   }
 * 2. GET /api/reservationCategories
 * 3. GET /api/reservationCategories/:id
 * 4. PATCH /api/reservationCategories/:id
 *   body : {
 *     categoryName: 'Caste', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     categoryKey: 'caste', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *     categoryType: 'single', // required, string, enum ['single', 'multiple']
 *   }
 * 5. DELETE /api/reservationCategories/:id
 * RESERVATION CATEGORY VALUE APIS
 * 1. POST /api/reservationCategory/:reservationCategoryId/values
 *   body : {
 *     valueName: 'SC', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     valueKey: 'sc', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *   }
 * 2. GET /api/reservationCategory/:reservationCategoryId/values
 * 3. GET /api/reservationCategory/:reservationCategoryId/values/:id
 * 4. PATCH /api/reservationCategory/:reservationCategoryId/values/:id
 *   body : {
 *     valueName: 'SC', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     valueKey: 'sc', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *   }
 * 5. DELETE /api/reservationCategory/:reservationCategoryId/values/:id
 * PROJECT OPTION APIS
 * 1. POST /api/projectOptions
 *   body : {
 *     optionName: 'Class', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     optionKey: 'class', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *     optionType: 'single', // required, string, enum ['single', 'multiple']
 *   }
 * 2. GET /api/projectOptions
 * 3. GET /api/projectOptions/:id
 * 4. PATCH /api/projectOptions/:id
 *   body : {
 *     optionName: 'Class', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     optionKey: 'class', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *     optionType: 'single', // required, string, enum ['single', 'multiple']
 *   }
 * 5. DELETE /api/projectOptions/:id
 * PROJECT OPTION VALUE APIS
 * 1. POST /api/projectOptions/:projectOptionId/values
 *   body : {
 *     valueName: 'FYJC SCIENCE 2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     valueKey: 'fyjcScience2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *     numberOfseats: 100, // required, number, min 1
 *     reservedSeats: [{
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 1, // required
 *       seatPercentage: 15, // required, number, min 1, max 100
 *       seats: 15, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 2, // required
 *       seatPercentage: 15, // required, number, min 1, max 100
 *       seats: 15, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 3, // required
 *       seatPercentage: 30, // required, number, min 1, max 100
 *       seats: 30, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 2, // required
 *       reservationCategoryValueId: 4, // required
 *       seatPercentage: 60, // required, number, min 1, max 100
 *       seats: 60, // required, number, min 1, max numberOfseats
 *     }] // optional, array, sum of seatPercentage for one reservationCategoryId should be less than or equal to 100, sum of seats for one reservationCategoryId should be less than or equal to numberOfseats
 *   }
 * 2. GET /api/projectOptions/:projectOptionId/values
 * 3. GET /api/projectOptions/:projectOptionId/values/:id
 * 4. PATCH /api/projectOptions/:projectOptionId/values/:id
 *   body : {
 *     valueName: 'FYJC SCIENCE 2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     valueKey: 'fyjcScience2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (underscore) , no spaces
 *     numberOfseats: 100, // required, number, min 1
 *     reservedSeats: [{
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 1, // required
 *       seatPercentage: 15, // required, number, min 1, max 100
 *       seats: 15, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 2, // required
 *       seatPercentage: 15, // required, number, min 1, max 100
 *       seats: 15, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 1, // required
 *       reservationCategoryValueId: 3, // required
 *       seatPercentage: 30, // required, number, min 1, max 100
 *       seats: 30, // required, number, min 1, max numberOfseats
 *     }, {
 *       reservationCategoryId: 2, // required
 *       reservationCategoryValueId: 4, // required
 *       seatPercentage: 60, // required, number, min 1, max 100
 *       seats: 60, // required, number, min 1, max numberOfseats
 *     }] // optional, array, sum of seatPercentage for one reservationCategoryId should be less than or equal to 100, sum of seats for one reservationCategoryId should be less than or equal to numberOfseats
 *   }
 * 5. DELETE /api/projectOptions/:projectOptionId/values/:id
 * PROJECT GROUP APIS
 * 1. POST /api/projectGroups
 *   body : {
 *     groupName: 'FYJC SCIENCE', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     parentGroupId: 1, // optional
 *   }
 * 2. GET /api/projectGroups
 * 3. GET /api/projectGroups/:id
 * 4. PATCH /api/projectGroups/:id
 *   body : {
 *     groupName: 'FYJC SCIENCE', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     parentGroupId: 1, // optional
 *   }
 * 5. DELETE /api/projectGroups/:id
 * PROJECT APIS
 * 1. POST /api/projectGroups/:projectGroupId/projects
 *   body : {
 *     projectName: 'FYJC SCIENCE 2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     startDate: '2022-06-01', // required, date
 *     endDate: '2022-07-01', // required, date, startDate should be less than endDate
 *     mainProjectOptionId: 1, // required
 *     optionalProjectOptions: [2], // optional, array
 *     workflow: [{}, {}], // required, array
 *     targetSeats: 100, // optional, number, min 1
 *     targetFeeCollection: 100000, // optional, number, min 1
 *   }
 * 2. GET /api/projectGroups/:projectGroupId/projects
 * 3. GET /api/projectGroups/:projectGroupId/projects/:id
 * 4. PATCH /api/projectGroups/:projectGroupId/projects/:id
 *   body : {
 *     projectName: 'FYJC SCIENCE 2022-23', // required, string, unique, max 50 characters, min 2 characters, no special characters except (space, underscore, hyphen, backslash, forwardslash)
 *     startDate: '2022-06-01', // required, date
 *     endDate: '2022-07-01', // required, date, startDate should be less than endDate
 *     mainProjectOptionId: 1, // required
 *     optionalProjectOptions: [2], // optional, array
 *     workflow: [1, 2], // required, array
 *     targetSeats: 100, // optional, number, min 1
 *     targetFeeCollection: 100000, // optional, number, min 1
 *   }
 * 5. DELETE /api/projectGroups/:projectGroupId/projects/:id
 */
