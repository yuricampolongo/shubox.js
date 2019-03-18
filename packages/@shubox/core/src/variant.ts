export interface ShuboxFile {
  s3url: string
}

export class Variant {
  s3url: string = ""
  variant: string = ""

  constructor(file: ShuboxFile, variant: string = "") {
    this.s3url = file.s3url
    this.variant = variant
  }

  url(): string {
    let filename = this.s3url.substring(this.s3url.lastIndexOf('/') + 1)
    let [vPrefix, vExtension] = this.variant.split(".")
    let newFilename = ""

    newFilename = this.cleanFilename(filename)
    newFilename = this.variantPrefix(vPrefix, newFilename)
    newFilename = this.variantFiletype(vExtension, newFilename)

    return(this.s3url.replace(filename, newFilename))
  }

  private cleanFilename(filename: string): string {
    return(filename.replace(/\+/g, '%2B'))
  }

  private variantPrefix(prefix: string, filename: string): string {
    if(!prefix) { return(filename) }

    prefix = prefix.replace(/\#$/, "_hash")
                   .replace(/\^$/, "_carat")
                   .replace(/\!$/, "_bang")

    return(`${prefix}_${filename}`)
  }

  private variantFiletype(extension: string, filename: string): string {
    if (!extension) { return(filename) }

    return(`${filename}.${extension}`)
  }
}
