body
{
    margin: 0;
    height: 100%;
}
.header 
{
    padding: 15px 0;
    background-color: #fff;
}
.header-content 
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}
.logo-content 
{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 85%;
}
img
{
    width: 2.0cm;
}
.logo-content-img 
{
    border: solid 0px #42515f;
}
.emp-text
{
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat",sans-serif;
    letter-spacing: 0px;
    color: green;
    text-transform: uppercase;
}
.emp-payroll 
{
    color: #42515f;
}
.form-content 
{
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}
.form 
{
    width: 65%;
    padding: 44px 60px;
    background: #fff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px grey;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}
.form-head 
{
    font: normal normal bold 24px/37px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}
.row-content 
{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}
.label 
{
    min-width: 140px;
}
label 
{
    padding: 12px 12px 12px 0;
    display: inline-block;
}
.text 
{
    font-size: 16px;
    color: #42515f;
    opacity: 1;
    font-family: Robonto;
}
.input
{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
.profile-radio-content 
{
    display: flex;
    flex-direction: row;
}
.profile-radio-content>label 
{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}
select 
{
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    background-color: transparent;
}
.buttonParent 
{
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}
.button 
{
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}
.submitButton 
{
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}
.cancelButton 
{
    text-decoration: none;
    text-align: center;
}
.resetButton 
{
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}

@media only screen and (max-width: 960px) 
{
    .cancelButton 
    {
        margin-left: 0px;
    }
    .form 
    {
        width: 85%;
        padding: 44px 20px;
    }
}
@media only screen and (max-width: 600px) 
{
    .form 
    {
        margin-top: 10px;
    }
    .row 
    {
        flex-direction: column;
    }
    .uploadButton 
    {
        justify-content: flex-start;
    }
    .profile-radio-button 
    {
        flex-flow: wrap;
    }
    .submit-reset 
    {
        width: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .submitButton 
    {
        margin: 0;
    }
    .buttonParent 
    {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
}
error-output 
{
    margin-left: 10px;
    font-size: 12px;
    font-style: italic;
    color: red;
}