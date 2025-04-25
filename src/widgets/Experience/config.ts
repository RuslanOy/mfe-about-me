export type JobExperience = {
    value: string
    company: string,
    title: string,
    description: string[],
    simpleText: string,
    responsibilities: {
        text: string,
        responsibilitiesArray: string[]
    },
    stack: string
};
