import axios from 'axios';
let config = {
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0Lzc2NjMxN2NiLWU5NDgtNGU1Zi04Y2VjLWRhYmM4ZTJmZDVkYS8iLCJpYXQiOjE2Njg3MDMwMDAsIm5iZiI6MTY2ODcwMzAwMCwiZXhwIjoxNjY4NzA3NzY0LCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFRBQUFBK3ZySExEdE9ybTZ6dWFJbTl2TUdBOXhvaVNsUmJkaW9La3NuZmM4NTFWemVXYlhBaXlkNlZQVXdvZHZjVStiOSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIxOGZiY2ExNi0yMjI0LTQ1ZjYtODViMC1mN2JmMmIzOWIzZjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkdydWVuZXdhbGQiLCJnaXZlbl9uYW1lIjoiTHVpcyIsImdyb3VwcyI6WyI4N2Y2MDAzZC05NDcwLTQzOGYtYmZlZi04MTNiMzdmYzJiNjgiLCIxMjVjYWI3Yy1mOWViLTQzZTUtOWUyMS01ZTNiNWRkZDA1YmEiLCI1YWQ3ZDZiNC1hZGFmLTRiOWQtOTU3Zi0wZjNiNjE0YmVlNjAiLCI4YWMxNTRkZC1kNDVmLTRjNDYtOTRlNS1iYjc4ZmVmYTNhZWYiLCI4YzgxODZlYS00MmE0LTQ0YWYtOGE3OC1hZTkxNDAxMWU2YjQiLCJkMmE2YThlZi00ZDI2LTRkOTUtYmQxMS1hYTFlYzYxOWY4MTgiXSwiaXBhZGRyIjoiMTQ3LjI1Mi4yMi43NiIsIm5hbWUiOiJEMjIxMjU0MTUgTHVpcyBHcnVlbmV3YWxkIiwib2lkIjoiN2IyODkyYmQtYzYxNi00ZmFkLWFjZmEtOTliM2EyMGE2OTAxIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIwMjU0MjkyNjUtMTk1ODM2NzQ3Ni03MjUzNDU1NDMtMzU3MDI1IiwicHVpZCI6IjEwMDMyMDAyMUQ0MDI2NUEiLCJyaCI6IjAuQVRFQXl4ZGpka2pwWDA2TTdOcThqaV9WMmtaSWYza0F1dGRQdWtQYXdmajJNQk14QVBZLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlFBT29kXzNDNmxueGFFXzdjN2w0TVpHY0tGUTVVTVR3OGllbHQycDVHNGMiLCJ0aWQiOiI3NjYzMTdjYi1lOTQ4LTRlNWYtOGNlYy1kYWJjOGUyZmQ1ZGEiLCJ1bmlxdWVfbmFtZSI6IkQyMjEyNTQxNUBteXR1ZHVibGluLmllIiwidXBuIjoiRDIyMTI1NDE1QG15dHVkdWJsaW4uaWUiLCJ1dGkiOiJsSVA5YVVfVHRreWpLQjUyUm5rV0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE1MjUzMzg5NDF9.XzMXGoiy5O4fGWhBj7CCFADyQCDD-2X8wtmSjedNrVXJkE-vkHZt90t74etoJ-OKrd8xEI6ZmDADqCWRex0iZyHBeYOhrIgLxmG_ikRdwiQ2aA9-Jxy0QR99OPDxvGtu1oAE_lMIKQbwHeAsZRtL-F6_CjHFZ6uUuSEfJXtVDq9kb36RqWGI_aDWP1lS4zw_e0pWt7nsdx5EF7h8IlElDOyqZEQmZ2XmqLwb3qQSENwNl1vJYEez6qbQWkyH7DDEocj8pFdqWk-QAdq3QKFoyCwS2QNa6BQcO7beepkkXY2v8q8PekaPnR6PXGihtrIM4pD-_LD412izmIggf_K5LQ',
  },
};
const setIP = async () => {
  const res = await axios.put(
    'https://management.azure.com/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Network/publicIPAddresses/pub_address_1?api-version=2022-05-01',
    {
      properties: {
        publicIPAllocationMethod: 'Static',
        idleTimeoutInMinutes: 10,
        publicIPAddressVersion: 'IPv4',
      },
      sku: {
        name: 'Basic',
      },
      location: 'uksouth',
    },
    config
  );

  console.log(res.data);
};

const setNetworkInterface = async () => {
  const res = await axios.put(
    'https://management.azure.com/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Network/networkInterfaces/network_interface_1?api-version=2022-05-01',
    {
      properties: {
        ipConfigurations: [
          {
            name: 'ipconfig1',
            properties: {
              publicIPAddress: {
                id: '/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Network/publicIPAddresses/pub_address_1',
              },
              subnet: {
                id: '/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Network/virtualNetworks/D22125415_group_09221820-vnet/subnets/default',
              },
            },
          },
        ],
      },
      location: 'uksouth',
    },
    config
  );
  console.log(res.data);
};

const setVm = async () => {
  const res = await axios.put(
    'https://management.azure.com/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Compute/virtualMachines/api_vm_1?api-version=2022-08-01',
    {
      id: '/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Compute/virtualMachines/myApiVM',
      type: 'Microsoft.Compute/virtualMachines',
      properties: {
        osProfile: {
          adminUsername: 'luis',
          secrets: [],
          computerName: 'myApiVM',
          linuxConfiguration: {
            ssh: {
              publicKeys: [
                {
                  path: '/home/luis/.ssh/authorized_keys',
                  keyData: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDHIiLQ29QfpD1+t+Gacp9HBiLsvrHbuSD+lN60YGzZYmZwMddFK6wpbLLYO2nf7W6ocoPj2Tx4Xw4Rg/de2TRchu7/eovgfzXVxDxc4Lj1qUUYyxBFI+2paKR2Jrp3zgEzT+ehzzIuHKhI4l7G1epElcePAYSU6BSlNShzf1yUHpbwvxWOBoo+5xJOsK4VkaLZyDYeoyaZG8ot5yw5JpteQ0A4y2nHCuBTPq+OYOuDEbRsOacAnl0UCy1mk4FMRDe3dYR81AbglIcjd2t4ABLrEtsUS3esU+Dlgh8upO09p0LtId+MU0Lw+bI3kB5aUL5gQAdpYc82b3+NZc4b2eTSrs0CL16OY/FExV/GXF1P/Vqf/mMBzLjTKAJdhyMKBvsTP4gxyaeUagzmRfS+rdIXHqHni0HwjxfVW26hSEUQpdfiMu41yfyldfkoKiTZHKSqs7KU91kC8FWuWGzBxY4Wez37CQSeWcSGRAvu2d3bU+Car1mAfxiixSIhJZIxvp8= d22125415@cc-7663-a15c123d-64d9c6b894-p6jsl`,
                },
              ],
            },
            disablePasswordAuthentication: true,
          },
        },
        networkProfile: {
          networkInterfaces: [
            {
              id: '/subscriptions/39e7d76d-64dd-454b-9b80-20edb996d00e/resourceGroups/D22125415_group_09221820/providers/Microsoft.Network/networkInterfaces/network_interface_1',
              properties: {
                primary: true,
              },
            },
          ],
        },
        storageProfile: {
          imageReference: {
            sku: '16.04-LTS',
            publisher: 'Canonical',
            version: 'latest',
            offer: 'UbuntuServer',
          },
          dataDisks: [],
        },
        hardwareProfile: {
          vmSize: 'Standard_D1_v2',
        },
        provisioningState: 'Creating',
      },
      name: 'api_vm_1',
      location: 'uksouth',
    },
    config
  );
  console.log(res.data);
};

const setAllUp = async () => {
  await setIP();
  console.log(
    '------------------------------------------------------------------------------------------------------------------------------'
  );
  await setNetworkInterface();
  console.log(
    '-------------------------------------------------------------------------------------------------------------------------------'
  );
  await setVm();
};

setAllUp();
