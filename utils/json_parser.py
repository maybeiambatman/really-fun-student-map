import json

json_data = open('FallEnrollment.json', 'r')

data = json.load(json_data)

years = ['FA14', 'FA13', 'FA12', 'FA11', 'FA10', 'FA09', 'FA08', 'FA07', 'FA06']

for year in years:
    print "{"
    for state in data:
        print ('"%s": %s,') % (state["Abbv"], state[year])
    print "}"
    print "--------"
