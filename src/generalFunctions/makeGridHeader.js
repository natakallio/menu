const repeatColumns = (headers, salaryTipes) => {
    salaryTipes.forEach(x => {
        const cellText = `${x.name} (${x.unit})`;
        headers.push({
            cellText,
            extra: x.using_unit_price ? 1 : 0
        });
        if (x.using_dates) {
            headers.push({
                cellText: "Kesto",
                extra: x.using_unit_price ? 2 : 0
            });
        }
    });
}

const makeGridHeader = salaryTipes => {

    let headers = [
        {
            cellText: "",
            extra: 0
        },
        {
            cellText: "Työntekijä",
            extra: 0
        }
    ];

    const repeatCount = 2;
    for (let index = 0; index < repeatCount; index++) {
        repeatColumns(headers, salaryTipes);
    }

    return headers;
}

export default makeGridHeader;