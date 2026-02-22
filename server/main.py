from fastapi import FastAPI, UploadFile
from core.prompts import TEACHER_PROMPT

app = FastAPI()

@app.get("/")
def home():
    return {"message": "ScholarGraph AI 後端已啟動"}

@app.post("/upload")
async def upload_pdf(file: UploadFile):
    # 這裡未來會接上讀取 PDF 的功能與 AI 解析
    return {
        "filename": file.filename,
        "status": "文件已接收",
        "instruction": "準備使用補習班名師模式進行解析"
    }
