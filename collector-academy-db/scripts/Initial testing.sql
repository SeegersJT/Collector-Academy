SELECT
	e.Username,
    p.Password
FROM VS_Employee e
inner join VS_Employee_Type et on et.Employee_Type_No = e.Employee_Type_No
inner join VS_Password p on p.Password_No = e.Password_No;

select *
from VS_Employee;

select *
from VS_Password;
    


select *
from VS_Confirmation_Token_Type;



-- ==============================================================================================================================

-- Call vf_VN_GUID with a generated UUID and make it uppercase in the procedure
SET @guidResult = vf_VS_GUID();

-- Optionally, use the result in other logic or return it
SELECT @guidResult AS 'Generated_GUID';

-- ==============================================================================================================================

-- Declare variables to capture the output parameters
set @resultno = 0;
set @resultreason = '';

-- Call the stored procedure with input parameters and capture the output
call sp_VS_Authenticate_Employee('VHO HANNO S', 'Hanno@1111', @resultno, @resultreason);

-- Display the output values
select @resultno as resultno, @resultreason as resultreason;

-- ==============================================================================================================================

-- ==============================================================================================================================

select *
from VS_Confirmation_Token;

-- Declare variables to capture the output parameters
set @resultno = 0;
set @resultreason = '';
set @uniqueNo = '';

-- Call the stored procedure with input parameters and capture the output
call sp_VS_Confirmation_Token_Change(1, '4918E8E7817611EF93FF000C2', '54321-54321-54321-54321', 1, '2024-10-03 13:55', 1, 1, 1, 1, @resultno, @resultreason, @uniqueNo);

-- Display the output values
select @resultno as resultno, @resultreason as resultreason, @uniqueNo as uniqueNo;


-- ==============================================================================================================================

-- ==============================================================================================================================

select *
from VS_One_Time_Pin;

-- Declare variables to capture the output parameters
set @resultno = null;
set @resultreason = null;
set @uniqueNo = null;

-- Call the stored procedure with input parameters and capture the output
call sp_VS_One_Time_Pin_Change(1, null, '4918E8E7817611EF93FF000C2', 123456, 1, 1, @resultno, @resultreason, @uniqueNo);

-- Display the output values
select @resultno as resultno, @resultreason as resultreason, @uniqueNo as uniqueNo;

-- ==============================================================================================================================

-- ==============================================================================================================================

select
	ct.Token,
    e.Username,
    otp.OTP,
    ct.Token_Expiry_Date,
    ctt.Confirmation_Token_Type
from VS_Confirmation_Token ct
inner join VS_Employee e on e.Employee_No = ct.Employee_No
inner join VS_Confirmation_Token_Type ctt on ctt.Confirmation_Token_Type_No = ct.Confirmation_Token_Type_No
left outer join VS_One_Time_Pin otp on otp.Confirmation_Token_No = ct.Confirmation_Token_No
where e.Username = 'VHO HANNO S'
;

-- ==============================================================================================================================

-- ==============================================================================================================================

-- Declare variables to capture the output parameters
set @resultno = 0;
set @resultreason = '';

-- Call the stored procedure with input parameters and capture the output
call sp_VS_Employee_GetBy_Username('VHO HANNO S', @resultno, @resultreason);

-- Display the output values
select @resultno as resultno, @resultreason as resultreason;

-- ==============================================================================================================================
