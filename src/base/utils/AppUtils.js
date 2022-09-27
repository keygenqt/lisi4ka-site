/**
 * App utils functions
 */
export const AppUtils = {
    parseStr: function (data) {
        function getSecond(value) {
            const [time, ms] = value.split(',')
            const [h, m, s] = time.split(':')
            return parseFloat(`${(parseInt(h) * 60 * 60) + (parseInt(m) * 60) + parseInt(s)}.${ms}`);
        }

        let str = []

        data.trim().split("\n\n").forEach((item) => {
            const [index, time] = item.trim().split("\n")
            const [start, end] = time.split(" --> ")
            const text = item.trim().replace(index + "\n", "").replace(time + "\n", "")
            const obj = {
                index: index,
                time: time,
                start: getSecond(start),
                end: getSecond(end),
                text: text,
            }
            str.push(obj)
        })

        return str
    },
};