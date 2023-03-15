# SYSTEM DESIGN

## USER GROUP

1. Admin - ผู้ดูแลระบบ (สถานศึกษา)
2. Executive - ผู้บริหารผู้ดูความคืบหน้า
3. Teacher -อาจารย์ผู้เข้าอบรม

## USE CASE (Pain Text)

1. Admin (ผู้ดูแลระบบ)
   - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
   - ดูข้อมูลผู้ใช้ทั้งหมดได้ ได้แก่ teacher และ Executive
     - แก้ไขข้อมูล teacher และ Executive ได้
     - เพิ่ม Executive ได้
     - ระงับ/ยกเลิกการระงับ Executive และ Teacher ได้
   - ดูรายการอบรมทั้งหมด
   - ดูคาบคืบหน้าผู้เข้าอบรมแต่ละคน
     <!-- - ระงับรายวิชาได้ กรณีที่ตรวจสอบและมีความผิดปกติ -->
     <!-- - ลบนักเรียนในรายวิชา -->

2. Executive (ผู้บริหาร)
    - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
        - ลืมรหัสผ่าน
    - ดูรายการอบรมทั้งหมด
        - ดูคาบคืบหน้าผู้เข้าอบรมแต่ละคน
    - แก้ไขข้อมูลส่วนตัว / เปลี่ยนรหัสผ่าน
    <!-- - จัดการรายวิชาที่สอน -->
     <!-- - เพิ่ม แก้ไข ลบ รายวิชา -->
     <!-- - ดูผู้อบรมทั้งหมด
     - ปิด/เปิด รายวิชาที่สอน -->
     <!-- - เพิ่มเนื้อหา ....
       - เพิ่มบทเรียน
       - เพิ่มไฟล์แนบแต่ละบืเรียน
       - เพิ่มวิดีโอแต่ละบทเรียน -->

3. Teacher (อาจารย์ผู้เข้าอบรม)
   - สมัครสมาชิก
   - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
     - ลืมรหัสผ่าน
   - ดูรายวิชาที่เปิดสอนทั้งหมด
   - ดูใบเกียรติบัตร
    - ปริ้นใบเกียรติบัตร
   <!-- - ลงทะเบียนเรียนรายวิชา -->
   - ดูอบรมที่มีทั้งหมด
   - แก้ไขข้อมูลส่วนตัว / เปลี่ยนรหัสผ่าน

## VERIFICATION SYSTEM
use email token verification

## LANGUAGE

- backend
  - Nodejs
  - express.js

- fontend
  - html
  - sass (css)
  - javascript
  -

## DATABASE
1. login_credentials
  - user_id
  - email
  - password
  - role
  - is_verified
  - authToken

2. email_verifications
  - verfication_id
  - user_id
  - token
  - created_date

3. admins
  - user_id
  - name
  - picture
  - created_date

4. techers
  - user_id
  - name
  - gender
  - dob
  - picture
  - created_date

5. students
  - user_id
  - name
  - gender
  - dob
  - level_of_education
  - picture
  - created_date

6. subjects_category
  - cat_id
  - cat_name
  - cat_assign
  - created_at

7. subjects
  - subject_id
  - subject_name
  - teacher_id
  - students_assign
  - created_date

8. subject_contents
  - content_id
  - content_type
  - attach_files
  - created_date

  ## users
| Column        | type          | desp                                         |
| ------------- |---------------|----------------------------------------------|
| user_id       | int           | PK for user id.                              |
| email         | varchar(100)  | user's email.                                |
| password      | varchar(100)  | hashed user's password.                      |
| is_verified   | int           | verify status.                               |
| authToken     | varchar(50)   | for login cookie.                            |

## users_information
| Column        | type          | desp                                         |
| ------------- |---------------|----------------------------------------------|
| user_id       | int           | user id from users table.                    |
| title         | varchar(100)  | title of name; Mr. Ms. Mrs.                  |
| name          | varchar(100)  | user's name.                                 |
| picture       | varchar(50)   | user's picture name.                         |
| created_date  | datetime      | created user date.                           |
| role          | int           | user's role.                                 |

## email_verifications
| Column        | type          | desp                                         |
| ------------- |---------------|----------------------------------------------|
| user_id       | int           | user id from users table.                    |
| token         | varchar(50)   | token sent to email.                         |
| expired_date  | datetime      | expired time for verify. default 15 min      |

## forgot_password
| Column        | type          | desp                                             |
| ------------- |---------------|--------------------------------------------------|
| user_id       | int           | user id from users table.                        |
| reset_token   | varchar(50)   | token sent to email.                             |
| expired_date  | datetime      | expired time for reset password. default 15 min  |


[{name: akld, email: asdasdad}, {name: akld, email: asdasdad}]

(name, email) value (akld, asdasdas), 