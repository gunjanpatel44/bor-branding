import Upload, { RcFile, UploadFile } from 'antd/es/upload'
import toast from 'react-hot-toast'
import { FileType, TProductCardTheme } from './types'

export const getBase64 = (file: FileType) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

/**
 * Handles before upload logic for images.
 * @param file - The file to upload
 * @param setFileList - Function to set the file list
 * @param currentFileList - The current file list
 * @returns false or Upload.LIST_IGNORE
 */
export const handleBeforeUpload = (
  file: RcFile,
  setFileList: (files: UploadFile[]) => void,
  currentFileList: UploadFile<{
    uid: string
    name: string
    status: string
    originFileObj: RcFile | undefined
  }>[]
) => {
  const isImage = file.type.startsWith('image/')
  const isUnder3MB = file.size <= 3 * 1024 * 1024
  if (!isImage) {
    toast.error(`${file.name} is not an image file`)
    return Upload.LIST_IGNORE
  }
  if (!isUnder3MB) {
    toast.error(`${file.name} exceeds the 3 MB size limit`)
    return Upload.LIST_IGNORE
  }
  setFileList([
    ...currentFileList,
    {
      uid: 'uid' in file ? file.uid : `${Date.now()}`,
      name: file.name,
      status: 'done',
      originFileObj: file,
    },
  ])
  return false
}

export const themeClasses: Record<TProductCardTheme, string> = {
  fieldsOfMemory: 'from-gray-900/40 to-black border-gray-700/30',
  whispersOfGrowth: 'from-green-900/40 to-black border-green-700/30',
  adikavya: 'from-red-900/40 to-black border-red-700/30',
}
