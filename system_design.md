# SYSTEM DESIGN

## USER GROUP

1. Admin - ผู้ดูแลระบบ (สถานศึกษา)
2. Teacher - อาจารย์ผู้สร้างรายวิชาการสอน (อาจารย์ภายในโรงเรียน)
3. Student - นักเรียน / นักศึกษา ที่ต้องการเรียนแต่ละรายวิชา (นักเรียนจากทุกที่)

## USE CASE (Pain Text)

1. Admin
   - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
   - ดูข้อมูลผู้ใช้ทั้งหมดได้ ได้แก่ teacher และ student
     - แก้ไขข้อมูล teacher และ student ได้
     - เพิ่ม teacher ได้
     - ระงับ/ยกเลิกการระงับ teacher และ student ได้
   - ดูรายวิชาที่เปิดสอนทั้งหมดได้
     - ระงับรายวิชาได้ กรณีที่ตรวจสอบและมีความผิดปกติ
     - ลบนักเรียนในรายวิชา

2. Teacher
   - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
     - ลืมรหัสผ่าน
   - ดูรายวิชาที่สอนทั้งหมด
   - แก้ไขข้อมูลส่วนตัว / เปลี่ยนรหัสผ่าน
   - จัดการรายวิชาที่สอน
     - เพิ่ม แก้ไข ลบ รายวิชา
     - ดูรายชื่อนักเรียนในรายวิชา
     - ปิด/เปิด รายวิชาที่สอน
     - เพิ่มเนื้อหา ....
       - เพิ่มบทเรียน
       - เพิ่มไฟล์แนบแต่ละบืเรียน
       - เพิ่มวิดีโอแต่ละบทเรียน

3. Student
   - สมัครสมาชิก
   - เข้าสู่ระบบด้วย อีเมล และ รหัสผ่าน
     - ลืมรหัสผ่าน
   - ดูรายวิชาที่เปิดสอนทั้งหมด
   - ลงทะเบียนเรียนรายวิชา
   - ดูรายวิชาที่ลงทะเบียนเรียนทั้งหมด
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