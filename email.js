import summary from './temp/allure-report/widgets/summary.json';
import sgMail from '@sendgrid/mail';
const sendGridKey = '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';

const total = summary.statistic.total;
const passed = summary.statistic.passed;
const failed = total - passed;

const percentPassed = passed / total * 100;
const percentFailed = 100 - percentPassed;
const runTimeMin = parseInt(summary.time.duration / 60000);
const runTimeSec = Math.round((summary.time.duration % 60000) / 1000);

const messageHTML = `
<div><strong>Total</strong>: ${total}</div>
<div style="color: green;">Passed: ${passed} (${percentPassed}%)</div>
<div style="color: red;">Failed: ${failed} - (${percentFailed}%)</div>
<div>Duration: ${runTimeMin} min ${runTimeSec} sec</div>
<div>Environment: http://qa.intgames.org</div>
`

sgMail.setApiKey(sendGridKey);

const msg = {
    to: 'myroslavnaz@gmail.com',  // Change to your verified email
    from: 'myroslavnaz@gmail.com', // Change to your verified sender
    subject: `IntGames Test Report`,
    html: messageHTML,
}

sgMail
    .send(msg)
    .then(() => {
        console.log('Email successfully sent')
    })
    .catch((error) => {
        console.error(error)
    })