export function doAlert (which, type, message) {
  which.$message({
    type: type,
    message: message
  })
}
