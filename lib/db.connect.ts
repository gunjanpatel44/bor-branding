import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME

const connect = async () => {
  const connectionState = mongoose.connection.readyState
  if (connectionState === 1) {
    console.log('Already connected to MongoDB')
    return
  }
  if (connectionState === 2) {
    console.log('Connecting...')
    return
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: DB_NAME,
      bufferCommands: true,
      serverSelectionTimeoutMS: 5000, // Adjust this to a higher value if needed
      socketTimeoutMS: 45000, // Add socket timeout to prevent timeouts
    })
    console.log('Connected to MongoDB')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log('Error: ', err)
    throw new Error('Error: ', err)
  }
}

export default connect
