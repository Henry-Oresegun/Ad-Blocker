file_in = open("adservers.txt", "r")
file_out = open("ad_domains.js", "w")

line = file_in.readline()
file_out.write("var ad_domains = [\n")


first = True
while(line):
    if("0.0.0.0 " in line):
        if not first:
             file_out.write(",\n")
        first = False
        line = (line.lstrip(".0.0.0 ")).rstrip("^\n")
        parsed_line = "*://*." + line + "/*"
        file_out.write("\"" + parsed_line + "\"")
    line = file_in.readline()
file_out.write("]")
file_out.close()
file_in.close()